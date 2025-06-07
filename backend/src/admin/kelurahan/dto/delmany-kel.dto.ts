import { ArrayNotEmpty, IsArray, IsInt } from "class-validator";

export class DelmanyKelurahanDto{
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({each:true})
    ids:number[];
}