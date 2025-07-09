import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FeatureApiModule } from './feature/feature-api.module';

@Module({
  imports: [UsersModule, FeatureApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
