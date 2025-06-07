import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateKelurahanDto{
    @IsNotEmpty()
    @IsString()
    kelurahan:string;

    @IsNotEmpty()
    @IsNumber()
    id_kec:number;
}