import {DataSource} from "typeorm";

require('dotenv').config();

export const db = new DataSource({
  type: 'postgres',
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: ['dist/**/*migration{.ts,.js}'],
  synchronize: false
});

db.initialize();
