import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FeatureApiModule } from './feature/feature-api.module';
import { ConfigModule } from '@nestjs/config';
import { BaseConfig } from '../config/base.config';
import { ExtsystemModule } from './extsystem/extsystem.module';
import { ExtsystemConfig } from './extsystem/config/exsystem.config';
import { DonateModule } from './donate/donate.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConfig } from '../config/db.config';

@Module({
  imports: [
    UsersModule,
    FeatureApiModule,
    ConfigModule.forRoot({
      envFilePath: '../../.env',
      isGlobal: true,
      load: [BaseConfig, ExtsystemConfig],
    }),
    TypeOrmModule.forRoot(DBConfig),
    ExtsystemModule,
    DonateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
