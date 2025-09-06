import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions.js';

export const SqliteTestConfig = {
  type: 'sqlite' as MysqlConnectionOptions['type'],
  database: ':memory:',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  dropSchema: true,
};
