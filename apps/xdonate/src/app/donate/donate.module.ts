import { Module } from '@nestjs/common';
import { DonateService } from './donate.service';
import { DonateController } from './donate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donation } from './entities/donate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donation])],
  controllers: [DonateController],
  providers: [DonateService],
})
export class DonateModule {}
