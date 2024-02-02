import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {map} from "rxjs";

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  async fetchData(body) {
    const { lat, lon } = body;
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
    const API_KEY = '34dd2082a4e34fd22a3d30aa89131cb9';
    const URL = `${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const data = await this.httpService.get(URL).pipe(map(res => res.data));

    return data;
  }

  getData() {
    return this.httpService.get('https://api.publicapis.org/entries').pipe(map(res => res.data));
  }
}
