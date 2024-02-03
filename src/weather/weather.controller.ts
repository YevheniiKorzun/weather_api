import {Body, Controller, Get, Post, Query, UseInterceptors, ValidationPipe} from '@nestjs/common';
import {WeatherService} from "./weather.service";
import {WeatherInterceptor} from "./interceptors/weather.interceptor";
import {WeatherRequestBodyDto, WeatherRequestQueryDto} from "./dto/request.dto";
import {WeatherResponseDto} from "./dto/response.dto";

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {
  }

  @Post()
  postWeatherData(@Body(ValidationPipe) body: WeatherRequestBodyDto): Promise<WeatherResponseDto> {
    return this.weatherService.postWeatherData(body);
  }

  @UseInterceptors(WeatherInterceptor)
  @Get()
  getWeatherData(@Query(ValidationPipe) query: WeatherRequestQueryDto): Promise<WeatherResponseDto> {
    return this.weatherService.getWeatherData(query);
  }
}
