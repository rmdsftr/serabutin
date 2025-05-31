import { ArrayNotEmpty, IsArray, IsInt } from "class-validator";

export class DeleteManyKotaDto{
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({each:true})
    ids: number[];
}