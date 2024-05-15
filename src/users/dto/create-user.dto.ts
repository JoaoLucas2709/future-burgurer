import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength, isString } from 'class-validator';

export class CreateUserDto {
  

  @IsNotEmpty()
  @IsString()
  @MaxLength(11)
  @MinLength(11)
  cpf: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(12)
  @Matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  role: string;

  
}
