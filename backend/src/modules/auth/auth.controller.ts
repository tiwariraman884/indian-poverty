import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: { identifier: string; otp: string; role: string }) {
    return this.authService.login(loginDto);
  }

  @Post('abha-link')
  async linkABHA(@Body() abhaDto: { abhaId: string; aadhaar: string; consent: boolean }) {
    return this.authService.linkABHA(abhaDto);
  }
}
