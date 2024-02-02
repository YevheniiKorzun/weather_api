import {Body, Controller, Get, Post} from '@nestjs/common';
import {WeatherService} from "./weather.service";

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {
  }

  @Post()
  putDataToDB(@Body() body) {
    return this.weatherService.fetchData(body);
  }

  @Get()
  getData() {
    return this.weatherService.getData();
  }
}
