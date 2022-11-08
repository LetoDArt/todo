import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { checkPassword } from '../user/user.utils';
import {
  LoginUserFullDto,
  LoginUserWithoutPasswordDto,
} from '../dtos/User.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(
    user: LoginUserFullDto,
    email: string,
    pass: string,
  ): Promise<LoginUserWithoutPasswordDto | null> {
    const coincidePass = await checkPassword(pass, user.password);
    if (user && coincidePass) {
      return {
        id: user.id,
        email: user.email,
      };
    }
    return null;
  }

  async login(user: LoginUserWithoutPasswordDto) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: this.configService.get('JWT_SECRET_KEY'),
      }),
    };
  }
}
