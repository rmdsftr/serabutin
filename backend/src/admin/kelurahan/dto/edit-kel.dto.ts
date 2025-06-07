import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateKelurahanDto{
    @IsNotEmpty()
    @IsString()
    kelurahan:string;

    @IsNotEmpty()
    @IsNumber()
    id_kec:number;
}