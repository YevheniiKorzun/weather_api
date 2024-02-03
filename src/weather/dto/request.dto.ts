import { IsNumber, IsNumberString } from 'class-validator';

export class WeatherRequestBodyDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lon: number;
}

export class WeatherRequestQueryDto {
  @IsNumberString()
  lat: number;

  @IsNumberString()
  lon: number;
}
