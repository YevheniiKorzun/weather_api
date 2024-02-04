import {DataSource} from "typeorm";

require('dotenv').config();

export const db = new DataSource({
  type: 'postgres',
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
  host: process.env.DB_HOST,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/**/*migration{.ts, .js}'],
  synchronize: true
});

db.initialize();
