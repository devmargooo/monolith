import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminSecretService } from '../admin-secret/admin-secret.service';
import { AdminSecret } from '../admin-secret/entities/admin-secret.entity';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';
import { PasswordUpdateDto } from './dto/password-update.dto';

@Injectable()
export class AuthService {
  private readonly ADMIN_LOGIN = 'admin';

  constructor(
    private readonly jwtService: JwtService,
    private readonly adminSecretService: AdminSecretService
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    // Проверяем логин
    if (loginDto.login !== this.ADMIN_LOGIN) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Проверяем пароль
    const isPasswordValid = await this.adminSecretService.verifyPassword(
      loginDto.password
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Генерируем токены
    const payload = { sub: this.ADMIN_LOGIN, login: this.ADMIN_LOGIN };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    return {
      accessToken,
      refreshToken,
    };
  }

  async updatePassword(
    passwordUpdateDto: PasswordUpdateDto
  ): Promise<AdminSecret> {
    return await this.adminSecretService.setPassword(
      passwordUpdateDto.password
    );
  }
}
