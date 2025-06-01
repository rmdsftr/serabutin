import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateProfesiDto{
    @IsNotEmpty()
    @IsString()
    profesi:string;

    @IsArray()
    @IsInt({each:true})
    id_cat:number[];
}