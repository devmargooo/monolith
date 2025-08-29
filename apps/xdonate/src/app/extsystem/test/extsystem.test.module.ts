import { Module } from '@nestjs/common';
import { ExtsystemService } from '../extsystem.service';
import { ConfigModule, registerAs } from '@nestjs/config';

const config = registerAs('extsystemConfig', () => ({}));

@Module({
  imports: [ConfigModule.forFeature(config)],
  providers: [ExtsystemService],
  exports: [ExtsystemService],
})
export class ExtsystemTestModule {}
