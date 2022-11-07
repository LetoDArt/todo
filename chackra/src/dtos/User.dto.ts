export class CreateUserDto {
  readonly id: string;
  readonly email: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly gender: string;
  readonly birthday: string;
  readonly phone: string;
}

export class LoginUserDto {
  readonly email: string;
  readonly password: string;
}
