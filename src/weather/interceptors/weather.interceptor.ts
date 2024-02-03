import {CallHandler, ExecutionContext, NestInterceptor} from "@nestjs/common";
import {map, Observable} from "rxjs";
import {WeatherDataFromDbDto, WeatherResponseDto} from "../dto/response.dto";

export class WeatherInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<WeatherResponseDto>): Observable<WeatherDataFromDbDto> | Promise<Observable<WeatherDataFromDbDto>> {
    return next.handle().pipe(map(data => {
      const weatherData = data.data;
      const { main, wind, sys } = weatherData;
      const { temp, feels_like, pressure, humidity } = main;
      const { sunrise, sunset } = sys;

     return {
       temp,
       feels_like,
       pressure,
       humidity,
       sunrise,
       sunset,
       wind_speed: wind.speed
     };
    }));
  }
}
