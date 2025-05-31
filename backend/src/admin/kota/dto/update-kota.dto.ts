import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateKotaDto{
    @IsNotEmpty()
    @IsString()
    nama_kota:string;

    @IsNotEmpty()
    @IsNumber()
    id_prov:number;
}