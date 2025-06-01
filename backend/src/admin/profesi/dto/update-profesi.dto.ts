import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator";

export class UpdateProfesiDto{
    @IsNotEmpty()
    @IsString()
    profesi:string;

    @IsArray()
    @IsInt({each:true})
    cats:number[];
}