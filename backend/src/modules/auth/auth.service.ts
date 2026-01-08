import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: { identifier: string; otp: string; role: string }) {
    // TODO: Integrate with Aadhaar/ABHA OTP verification
    const payload = { sub: loginDto.identifier, role: loginDto.role };
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
      expiresIn: 3600,
    };
  }

  async linkABHA(abhaDto: { abhaId: string; aadhaar: string; consent: boolean }) {
    // TODO: Integrate with ABDM API
    return { success: true, message: 'ABHA linked successfully' };
  }
}
