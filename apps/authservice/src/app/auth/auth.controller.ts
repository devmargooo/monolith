import {
  Body,
  Controller,
  NotImplementedException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AdminSecret } from '../admin-secret/entities/admin-secret.entity';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';
import { PasswordUpdateDto } from './dto/password-update.dto';
import { RefreshDto } from './dto/refresh.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.login(loginDto);
  }

  @Post('refresh')
  async refresh(@Body() refreshDto: RefreshDto): Promise<LoginResponseDto> {
    return this.authService.refresh(refreshDto);
  }

  @Post('pswdupdate')
  @UseGuards(JwtAuthGuard)
  async updatePassword(
    @Body() passwordUpdateDto: PasswordUpdateDto
  ): Promise<AdminSecret> {
    return this.authService.updatePassword(passwordUpdateDto);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  logout() {
    throw new NotImplementedException();
  }
}
