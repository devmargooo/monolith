import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import 'reflect-metadata';

import { DBConfig } from './db.config';

// Config for migrations
export const dataSourceOptions = {
  ...DBConfig,
  entities: [`${join(__dirname, '../')}**/*.entity.{ts,js}`],
  migrations: [
    join(__dirname, '../../../../../', 'apps/xdonate/migrations/**/*{.ts,.js}'),
  ],
  migrationsTableName: 'migrations_notes',
} as unknown as DataSourceOptions;

export const dataSource: DataSource = new DataSource(dataSourceOptions);
