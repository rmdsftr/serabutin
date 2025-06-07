import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UpdateTipeDto{
    @IsNotEmpty()
    @IsString()
    @MaxLength(100, {message: "Maksimal 100 karakter"})
    tipe:string;
}