import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersApiService } from './users-api.service';
import { CreateUsersApiDto } from './dto/create-users-api.dto';
import { UpdateUsersApiDto } from './dto/update-users-api.dto';

@Controller('users-api')
export class UsersApiController {
  constructor(private readonly usersApiService: UsersApiService) {}

  @Post()
  create(@Body() createUsersApiDto: CreateUsersApiDto) {
    return this.usersApiService.create(createUsersApiDto);
  }

  @Get()
  findAll() {
    return this.usersApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersApiService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsersApiDto: UpdateUsersApiDto
  ) {
    return this.usersApiService.update(+id, updateUsersApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersApiService.remove(+id);
  }
}
