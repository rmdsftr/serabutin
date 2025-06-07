import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { $Enums } from "../../../prisma/generated/prisma";

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    @MaxLength(50, {message: "Username maksimal 50 karakter"})
    username:string;

    @IsNotEmpty()
    @IsString()
    nama:string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8, {message: "Kata sandi minimal 8 karakter"})
    @MaxLength(25, {message: "Kata sandi maksimal 25 karakter"})
    sandi:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8, {message: "Kata sandi minimal 8 karakter"})
    @MaxLength(25, {message: "Kata sandi maksimal 25 karakter"})
    konfirmpw:string;

    @IsNotEmpty()
    @IsEnum($Enums.gender_enum)
    gender: $Enums.gender_enum;

    @IsNotEmpty()
    @IsDateString()
    birthdate:string;
}