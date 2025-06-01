import { ArrayNotEmpty, IsArray, IsInt } from "class-validator";

export class DelmanyProfesiDto{
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({each:true})
    ids:number[];
}