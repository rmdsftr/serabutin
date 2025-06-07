import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateKecamatanDto{
    @IsNotEmpty()
    @IsString()
    kecamatan:string;

    @IsNotEmpty()
    @IsNumber()
    id_kota:number;
}