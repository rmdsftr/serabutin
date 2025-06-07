import { IsDateString, IsEnum, IsString, MaxLength } from "class-validator";
import { $Enums } from "../../../../prisma/generated/prisma";

export class UpdateProfileDto{
    @IsString()
    @MaxLength(100, {message: "Display name maksimal 100 karakter"})
    nama:string;

    @IsEnum($Enums.gender_enum)
    gender: $Enums.gender_enum;

    @IsDateString()
    birthdate:string;

    @IsString()
    @MaxLength(255, {message: "Maksimal 255 karakter"})
    bio:string;
}