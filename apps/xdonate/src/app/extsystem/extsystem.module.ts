import { Module } from '@nestjs/common';
import { ExtsystemService } from './extsystem.service';

@Module({
  providers: [ExtsystemService],
  exports: [ExtsystemService],
})
export class ExtsystemModule {}
