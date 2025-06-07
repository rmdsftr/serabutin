import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateKecamatanDto{
    @IsNotEmpty()
    @IsString()
    kecamatan: string;

    @IsNotEmpty()
    @IsNumber()
    id_kota:number;
}