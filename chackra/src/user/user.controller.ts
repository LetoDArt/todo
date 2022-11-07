import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserService } from './user.service';

import { CreateUserDto } from '../dtos/User.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  create(
    @Body() user: CreateUserDto,
  ): Promise<Omit<CreateUserDto, 'password'>> {
    return this.userService.createNewUser(user);
  }

  @Get('/lol')
  getData() {
    return { lol: 'lol' };
  }
}
