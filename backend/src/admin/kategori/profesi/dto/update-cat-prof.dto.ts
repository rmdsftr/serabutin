import { IsNotEmpty, IsString } from "class-validator";

export class UpdateCatProfDto{
    @IsNotEmpty()
    @IsString()
    prof_cat:string;
}