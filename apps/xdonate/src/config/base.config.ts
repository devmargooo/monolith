import { registerAs } from '@nestjs/config';

export const BaseConfig = registerAs('baseConfig', () => ({}));
