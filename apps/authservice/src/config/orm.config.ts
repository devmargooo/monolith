import { join } from 'path';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

import { DBConfig } from './db.config';

// Config for migrations
export const dataSourceOptions = {
  ...DBConfig,
  entities: [`${join(__dirname, '../')}**/*.entity.{ts,js}`],
  migrations: [
    join(
      __dirname,
      '../../../../../',
      'apps/authservice/migrations/**/*{.ts,.js}'
    ),
  ],
  migrationsTableName: 'migrations_authservice',
} as unknown as DataSourceOptions;

export const dataSource: DataSource = new DataSource(dataSourceOptions);
