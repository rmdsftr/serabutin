import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateProvinsiDto } from "./dto/create-prov.dto";
import { toTitleCase } from "../../utils/title.util";
import { UpdateProvinsiDto } from "./dto/update-prov.dto";
import { getCurrentDatetime } from "../../utils/current-date.util";

@Injectable()
export class ProvinsiService{
    constructor(private prisma:PrismaService){}

    async create(data:CreateProvinsiDto[]){
        try {
            const duplicates = new Set();
            for(const items of data){
                const key = `${toTitleCase(items.nama_prov)}`;
                if(duplicates.has(key)){
                    throw new BadRequestException("Provinsi yang diinputkan ada yang duplikat")
                }
                duplicates.add(key);
            }

            for(const item of data){
                const existingProv = await this.prisma.provinces.findFirst({
                    where: {nama_prov: toTitleCase(item.nama_prov)}
                })
                if(existingProv){
                    throw new BadRequestException(`Provinsi ${item.nama_prov} sudah ada`)
                }
            }

            const newProvs = await this.prisma.provinces.createMany({
                data: data.map((item) => ({
                    nama_prov: toTitleCase(item.nama_prov)
                }))
            })
            return {
                message: 'Berhasil menambahkan provinsi',
                data: newProvs
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            console.error("error menambahkan provinsi : ", error);
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async edit(data:UpdateProvinsiDto, id_prov:number){
        try {
            const cekProv = await this.prisma.provinces.findUnique({
                where: {id_prov: id_prov}
            })
            if(!cekProv){
                throw new BadRequestException("Provinsi tidak ditemukan")
            }

            const updatedProv = await this.prisma.provinces.update({
                where: {id_prov: id_prov},
                data: {
                    nama_prov: toTitleCase(data.nama_prov),
                    updated_at: getCurrentDatetime()
                }
            })
            return {
                message: 'Berhasil mengubah nama provinsi',
                data: updatedProv
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            console.error("error mengupdate data provinsi : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async delete(id_prov:number){
        try {
            const checkProv = await this.prisma.provinces.findUnique({
                where: {id_prov: id_prov}
            })
            if(!checkProv){
                throw new BadRequestException("Provinsi tidak ditemukan")
            }

            await this.prisma.cities.deleteMany({
                where: {id_prov: id_prov}
            })

            await this.prisma.alamat.deleteMany({
                where: {id_prov: id_prov}
            })

            await this.prisma.provinces.delete({
                where: {id_prov: id_prov}
            })
            return {
                message: 'Berhasil menghapus provinsi'
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            console.error("error menghapus provinsi : ", error);
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async deleteMany(ids:number[]){
        try {
            const checkProvs = await this.prisma.provinces.findMany({
                where: {
                    id_prov: {
                        in: ids
                    }
                }
            })

            if(checkProvs.length != ids.length){
                throw new BadRequestException("Salah satu atau lebih provinsi tidak ditemukan")
            }

            await this.prisma.cities.deleteMany({
                where: {
                    id_prov: {
                        in: ids
                    }
                }
            })

            await this.prisma.alamat.deleteMany({
                where: {
                    id_prov: {
                        in: ids
                    }
                }
            })

            await this.prisma.provinces.deleteMany({
                where: {
                    id_prov: {
                        in: ids
                    }
                }
            })

            return {
                message: 'Berhasil menghapus provinsi dan kota terkait'
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            console.error("error menghapus provinsi dan kota terkait : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }
}