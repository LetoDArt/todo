class CreateUserDto {
  readonly id: string;
  readonly email: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly gender: string;
  readonly birthday: string;
  readonly phone: string;
}

class LoginUserDto {
  readonly id: string;
  readonly email: string;
  readonly password: string;
}

export type LoginUserFullDto = LoginUserDto;
export type LoginUserWithoutIdDto = Omit<LoginUserDto, 'id'>;
export type LoginUserWithoutPasswordDto = Omit<LoginUserDto, 'password'>;

export type CreateUserFullDto = CreateUserDto;
export type CreateUserWithoutIdDto = Omit<CreateUserDto, 'id'>;
export type CreateUserWithoutPasswordDto = Omit<CreateUserDto, 'password'>;
