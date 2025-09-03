import { IsUUID, IsString, IsNumber, IsDate, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDonateDto {
  @IsUUID()
  payment_id!: string;

  @IsNumber()
  amount!: number;

  @IsDate()
  @Type(() => Date)
  timestamp!: Date;

  @IsString()
  status!: string;

  @IsString()
  username!: string;

  @IsEmail()
  useremail!: string;
}
