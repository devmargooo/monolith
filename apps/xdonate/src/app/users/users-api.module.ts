import { Module } from '@nestjs/common';
import { UsersApiService } from './users-api.service';
import { UsersApiController } from './users-api.controller';

@Module({
  controllers: [UsersApiController],
  providers: [UsersApiService],
})
export class UsersApiModule {}
