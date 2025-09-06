import { IsUUID, IsString, IsNumber, IsEmail } from 'class-validator';

export class CreateDonateDto {
  @IsUUID()
  payment_id!: string;

  @IsNumber()
  amount!: number;

  // @IsDate()
  // @Type(() => Date)
  // timestamp!: Date;

  @IsString()
  status!: string;

  @IsString()
  username!: string;

  @IsEmail()
  useremail!: string;
}
