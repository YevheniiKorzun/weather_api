import { Exclude, Expose } from 'class-transformer';

class Coord {
  lon: number;
  lat: number;
}

class Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

class Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

class Wind {
  speed: number;
  deg: number;
  gust: number;
}

class Rain {
  '1h': number;
}

class Clouds {
  all: number;
}

class Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export class OpenWeatherMapResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export class WeatherResponseDto {
  @Exclude()
  id: number;

  @Exclude()
  lat: number;

  @Exclude()
  lon: number;

  @Expose()
  data: OpenWeatherMapResponse;
}

export class WeatherDataFromDbDto {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  sunrise: number;
  sunset: number;
  wind_speed: number;
}
