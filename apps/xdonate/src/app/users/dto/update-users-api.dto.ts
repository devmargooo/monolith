import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersApiDto } from './create-users-api.dto';

export class UpdateUsersApiDto extends PartialType(CreateUsersApiDto) {}
