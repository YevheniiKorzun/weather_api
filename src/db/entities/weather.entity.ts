import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OpenWeatherMapResponse } from '../../weather/dto/response.dto';

@Entity('weather')
export class WeatherEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'numeric' })
  lat: number;

  @Column({ type: 'numeric' })
  lon: number;

  @Column({
    type: 'json',
    nullable: true,
    transformer: {
      to(value: OpenWeatherMapResponse): string {
        return JSON.stringify(value);
      },
      from(value: string): OpenWeatherMapResponse {
        return JSON.parse(value);
      },
    },
  })
  data: OpenWeatherMapResponse;
}
