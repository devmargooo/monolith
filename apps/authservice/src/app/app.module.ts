import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConfig } from '../config/db.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot(DBConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
