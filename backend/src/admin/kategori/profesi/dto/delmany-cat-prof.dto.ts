import { ArrayNotEmpty, IsArray, IsInt } from "class-validator";

export class DelCatProfDto{
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({each:true})
    ids: number[];
}