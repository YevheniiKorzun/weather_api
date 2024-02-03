import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { WeatherEntity } from '../db/entities/weather.entity';
import { plainToInstance } from 'class-transformer';
import { OpenWeatherMapResponse, WeatherResponseDto } from './dto/response.dto';
import {
  WeatherRequestBodyDto,
  WeatherRequestQueryDto,
} from './dto/request.dto';
import { AxiosResponse } from 'axios';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  async fetchData(
    body: WeatherRequestBodyDto,
  ): Promise<AxiosResponse<OpenWeatherMapResponse>> {
    try {
      const { lat, lon } = body;
      const BASE_URL = process.env.BASE_URL;
      const API_KEY = process.env.API_KEY;
      const URL = `${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`;

      return this.httpService.axiosRef.get(URL).then((res) => res.data);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.NOT_FOUND);
    }
  }

  async postWeatherData(
    body: WeatherRequestBodyDto,
  ): Promise<WeatherResponseDto> {
    try {
      const weatherData = await this.fetchData(body);
      const weatherFromDb = await WeatherEntity.findOneBy(body);
      const { lat, lon } = body;

      if (!weatherFromDb) {
        const weather = new WeatherEntity();

        weather.lat = lat;
        weather.lon = lon;
        weather.data = JSON.parse(JSON.stringify(weatherData));

        await WeatherEntity.save(weather);

        return plainToInstance(WeatherResponseDto, weather);
      }

      weatherFromDb.data = JSON.parse(JSON.stringify(weatherData));

      await WeatherEntity.save(weatherFromDb);

      return plainToInstance(WeatherResponseDto, weatherFromDb);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.NOT_FOUND);
    }
  }

  async getWeatherData(
    query: WeatherRequestQueryDto,
  ): Promise<WeatherResponseDto> {
    try {
      const weather = await WeatherEntity.findOneBy(query);

      if (!weather) {
        throw new HttpException('No data', HttpStatus.NOT_FOUND);
      }

      return plainToInstance(WeatherResponseDto, weather);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.NOT_FOUND);
    }
  }
}
