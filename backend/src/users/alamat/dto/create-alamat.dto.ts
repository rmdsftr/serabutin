import { IsBoolean, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateAlamatDto{
    @IsNotEmpty()
    @IsString()
    alamat:string;

    @IsString()
    @MaxLength(100, {message:"Catatan maksimal 100 karakter"})
    catatan:string;

    @IsNotEmpty()
    @IsNumber()
    @Min(-90)
    @Max(90)
    latitude:number;

    @IsNotEmpty()
    @IsNumber()
    @Min(-180)
    @Max(180)
    longitude:number;

    @IsNotEmpty()
    @IsBoolean()
    isDefault:boolean;

    @IsNumber()
    id_tipe:number;

    @IsNotEmpty()
    @IsNumber()
    id_kel:number;

    @IsNotEmpty()
    @IsNumber()
    id_kec:number;

    @IsNotEmpty()
    @IsNumber()
    id_kota:number;

    @IsNotEmpty()
    @IsNumber()
    id_prov:number;
}