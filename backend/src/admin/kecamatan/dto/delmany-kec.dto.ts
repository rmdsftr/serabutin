import { ArrayNotEmpty, IsArray, IsInt } from "class-validator";

export class DelmanyKecamatanDto{
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({each:true})
    ids:number[];
}