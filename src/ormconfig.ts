import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';

dotenvConfig({ path: resolve(__dirname, '../.env') });

import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_DATABASE, 
  synchronize: true,
  entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
};
