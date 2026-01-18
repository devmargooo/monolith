import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const DBConfig = {
  type: 'sqlite' as MysqlConnectionOptions['type'],
  database: 'authservice.sqlite',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
};
