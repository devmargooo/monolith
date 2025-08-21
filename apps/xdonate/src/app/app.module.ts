import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FeatureApiModule } from './feature/feature-api.module';
import { ConfigModule } from '@nestjs/config';
import { BaseConfig } from '../base.config';
import { ExtsystemModule } from './extsystem/extsystem.module';

@Module({
  imports: [
    UsersModule,
    FeatureApiModule,
    ConfigModule.forRoot({
      envFilePath: '../../.env',
      isGlobal: true,
      load: [BaseConfig],
    }),
    ExtsystemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
