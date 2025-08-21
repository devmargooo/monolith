import { Module } from '@nestjs/common';
import { ExtsystemService } from './extsystem.service';

@Module({
  providers: [ExtsystemService],
})
export class ExtsystemModule {}
