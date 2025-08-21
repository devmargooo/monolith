import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FeatureApiModule } from './feature/feature-api.module';
import { ConfigModule } from '@nestjs/config';
import { BaseConfig } from '../base.config';
import { ExtsystemModule } from './extsystem/extsystem.module';
import { ExtsystemConfig } from './extsystem/config/exsystem.config';

@Module({
  imports: [
    UsersModule,
    FeatureApiModule,
    ConfigModule.forRoot({
      envFilePath: '../../.env',
      isGlobal: true,
      load: [BaseConfig, ExtsystemConfig],
    }),
    ExtsystemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
