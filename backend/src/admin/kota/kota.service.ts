import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateKotaDto } from "./dto/create-kota.dto";
import { toTitleCase } from "../../utils/title.util";
import { UpdateKotaDto } from "./dto/update-kota.dto";
import { getCurrentDatetime } from "../../utils/current-date.util";

@Injectable()
export class KotaService{
    constructor(private prisma:PrismaService){}

    async create(data:CreateKotaDto[]){
        try {
            const duplicates = new Set();
            for(const items of data){
                const key = `${toTitleCase(items.nama_kota)}-${items.id_prov}`;
                if(duplicates.has(key)){
                    throw new BadRequestException("Kota yang diinputkan ada yang duplikat")
                }
                duplicates.add(key);
            }

            for(const item of data){
                const existingKota = await this.prisma.cities.findFirst({
                    where: {
                        nama_kota: toTitleCase(item.nama_kota),
                        id_prov: item.id_prov
                    }
                })
                if(existingKota){
                    throw new BadRequestException(`Kota ${item.nama_kota} sudah terdaftar`)
                }
            }
            const newCities = await this.prisma.cities.createMany({
                data: data.map((c) => ({
                    nama_kota: toTitleCase(c.nama_kota),
                    id_prov: c.id_prov
                }))
            })
            return {
                message: 'Berhasil menambahkan kota',
                data: newCities
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            if(error.code === 'P2003'){
                throw new BadRequestException("Provinsi pada kota yang didaftarkan tidak valid")
            }
            console.error("error menambahkan kota : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async edit(data:UpdateKotaDto, id_kota:number){
        try {
            const checkKota = await this.prisma.cities.findUnique({
                where: {id_kota: id_kota}
            })

            if(!checkKota){
                throw new BadRequestException("Data kota tidak ditemukan")
            }

            const updatedCity = await this.prisma.cities.update({
                where: {id_kota:id_kota},
                data: {
                    nama_kota: toTitleCase(data.nama_kota),
                    id_prov: data.id_prov,
                    updated_at: getCurrentDatetime()
                }
            })

            return {
                message: 'Berhasil mengupdate kota',
                data: updatedCity
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            if(error.code === 'P2003'){
                throw new BadRequestException("Provinsi yang dipilih tidak valid")
            }
            console.error("error mengedit data kota : ", error);
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async delete(id_kota:number){
        try {
            const check = await this.prisma.cities.findUnique({
                where: {id_kota: id_kota}
            })
            if(!check){
                throw new BadRequestException("Kota tidak ditemukan")
            }

            await this.prisma.alamat.deleteMany({
                where: {id_kota: id_kota}
            })

            await this.prisma.kecamatan.deleteMany({
                where: {id_kota: id_kota}
            })

            await this.prisma.cities.delete({
                where: {id_kota: id_kota}
            })
            return {
                message: 'Berhasil menghapus kota'
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            console.error("error menghapus kota : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async deleteMany(ids:number[]){
        try {
            const cekKota = await this.prisma.cities.findMany({
                where: {
                    id_kota: {
                        in: ids
                    }
                }
            })
            if(cekKota.length != ids.length){
                throw new BadRequestException("Beberapa id_kota tidak valid")
            }

            await this.prisma.alamat.deleteMany({
                where: {
                    id_kota: {
                        in: ids
                    }
                }
            })

            await this.prisma.kecamatan.deleteMany({
                where: {
                    id_kota: {
                        in: ids
                    }
                }
            })

            await this.prisma.cities.deleteMany({
                where: {
                    id_kota: {
                        in: ids
                    }
                }
            })
            return {
                message: 'Berhasil menghapus kota'
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            console.error("error menghapus kota-kota yang dipilih : ", error);
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }
}