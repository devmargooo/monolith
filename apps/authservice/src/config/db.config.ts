import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const DBConfig = {
  type: 'sqlite' as MysqlConnectionOptions['type'],
  database: 'authservice.sqlite',
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
};
