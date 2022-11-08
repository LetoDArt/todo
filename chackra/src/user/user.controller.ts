import {
  Body,
  Controller,
  Request,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';

import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthService } from '../auth/auth.service';

import {
  CreateUserWithoutIdDto,
  CreateUserWithoutPasswordDto,
  LoginUserWithoutIdDto,
} from '../dtos/User.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('/create')
  create(
    @Body() user: CreateUserWithoutIdDto,
  ): Promise<CreateUserWithoutPasswordDto> {
    return this.userService.createNewUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/lol')
  getData(@Request() req) {
    return req.user;
  }

  @Post('/login')
  async login(@Body() user: LoginUserWithoutIdDto) {
    const userDB = await this.userService.findOne(user.email);
    const validatedUser = await this.authService.validateUser(
      userDB,
      user.email,
      user.password,
    );
    return await this.authService.login(validatedUser);
  }
}
