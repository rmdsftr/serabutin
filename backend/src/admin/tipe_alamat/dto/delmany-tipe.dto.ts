import { ArrayNotEmpty, IsArray, IsInt } from "class-validator";

export class DeleteManyTipeDto{
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({each:true})
    ids: number[];
}