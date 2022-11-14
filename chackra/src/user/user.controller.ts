import {
  Body,
  Controller,
  Request,
  Get,
  Post,
  UseGuards,
  HttpException,
  HttpStatus,
  Put,
} from '@nestjs/common';

import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthService } from '../auth/auth.service';

import {
  CreateUserFullDto,
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
  @Get('/profile')
  async getProfile(@Request() req) {
    return await this.userService.getUserInfo(req.user.userId);
  }

  @Post('/login')
  async login(@Body() user: LoginUserWithoutIdDto) {
    const userDB = await this.userService.findOne(user.email);

    if (!userDB) {
      throw new HttpException(
        "There's no user with such email",
        HttpStatus.UNAUTHORIZED,
      );
    }

    const validatedUser = await this.authService.validateUser(
      userDB,
      user.email,
      user.password,
    );
    return await this.authService.login(validatedUser);
  }

  @Put('/change')
  async change(
    @Body() user: CreateUserFullDto,
  ): Promise<CreateUserWithoutPasswordDto> {
    return await this.userService.updateUser(user);
  }
}
