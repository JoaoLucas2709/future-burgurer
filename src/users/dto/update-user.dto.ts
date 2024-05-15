import { IsOptional, IsString, IsEmail, MaxLength, IsNotEmpty, Matches } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name: string;
  
    @IsOptional()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(12)
    @Matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/)
    password: string;



    


  }