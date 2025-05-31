import { IsNotEmpty, IsString } from "class-validator";

export class CreateCatProfDto{
    @IsNotEmpty()
    @IsString()
    prof_cat:string;
}