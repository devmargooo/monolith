import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConfig } from '../config/db.config';
import { AdminSecretModule } from './admin-secret/admin-secret.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(DBConfig), AdminSecretModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
