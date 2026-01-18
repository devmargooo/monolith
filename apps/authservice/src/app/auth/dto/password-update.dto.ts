import { IsNotEmpty, IsString } from 'class-validator';

export class PasswordUpdateDto {
  @IsString()
  @IsNotEmpty()
  password!: string;
}
