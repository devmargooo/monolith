import { registerAs } from '@nestjs/config';
import { IExtsystemConfig } from './extsystem.config.interface';

export const ExtsystemConfig = registerAs<IExtsystemConfig>(
  'extsystemConfig',
  () => ({
    payService: {
      url: '',
      secret: '',
    },
  })
);
