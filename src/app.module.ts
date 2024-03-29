import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherService } from './weather/weather.service';
import { WeatherModule } from './weather/weather.module';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from '../db.config';

@Module({
  imports: [WeatherModule, HttpModule, TypeOrmModule.forRoot(db.options)],
  controllers: [AppController],
  providers: [AppService, WeatherService],
})
export class AppModule {}
