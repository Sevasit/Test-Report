import { IsEmail, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  readonly firstName: string;
  @IsString()
  readonly lastName: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly phone: string;
  @IsString()
  readonly password: string;
  @IsString()
  readonly role: string;
}
