import { Module } from '@nestjs/common';
import { ExtsystemService } from '../extsystem.service';
import { ConfigModule, registerAs } from '@nestjs/config';
import { ExtsystemTestConfig } from './extsystem.test.config';

const config = registerAs('extsystemConfig', () => (ExtsystemTestConfig));

@Module({
  imports: [ConfigModule.forFeature(config)],
  providers: [ExtsystemService],
  exports: [ExtsystemService],
})
export class ExtsystemTestModule {}
