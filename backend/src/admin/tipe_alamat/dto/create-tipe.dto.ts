import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateTipeDto{
    @IsNotEmpty()
    @IsString()
    @MaxLength(100, {message: "Maksimal 100 karakter"})
    tipe:string;
}