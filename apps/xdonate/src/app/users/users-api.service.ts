import { Injectable } from '@nestjs/common';
import { CreateUsersApiDto } from './dto/create-users-api.dto';
import { UpdateUsersApiDto } from './dto/update-users-api.dto';

@Injectable()
export class UsersApiService {
  create(createUsersApiDto: CreateUsersApiDto) {
    return 'This action adds a new usersApi';
  }

  findAll() {
    return `This action returns all usersApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersApi`;
  }

  update(id: number, updateUsersApiDto: UpdateUsersApiDto) {
    return `This action updates a #${id} usersApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersApi`;
  }
}
