import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminSecretModule } from '../admin-secret/admin-secret.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JWT_SECRET } from './constants/jwt.constants';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    AdminSecretModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
