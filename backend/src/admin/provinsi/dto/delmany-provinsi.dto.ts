import { ArrayNotEmpty, IsArray, IsInt } from "class-validator";

export class DeleteManyProvinsiDto{
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({each:true})
    ids: number[];
}