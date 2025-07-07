import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersApiModule } from './users-api.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [UsersApiModule],
})
export class UsersModule {}
