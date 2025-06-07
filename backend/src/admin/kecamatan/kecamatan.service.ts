import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateKecamatanDto } from "./dto/create-kec.dto";
import { toTitleCase } from "../../utils/title.util";
import { UpdateKecamatanDto } from "./dto/edit-kec.dto";
import { getCurrentDatetime } from "../../utils/current-date.util";

@Injectable()
export class KecamatanService{
    constructor(private prisma:PrismaService){}

    async new(data:CreateKecamatanDto[]){
        try {
            const duplicates = new Set();
            for(const items of data){
                const key = `${toTitleCase(items.kecamatan)}-${items.id_kota}`;
                if(duplicates.has(key)){
                    throw new BadRequestException("Data yang diinputkan ada yang duplikat")
                }
                duplicates.add(key);
            }

            for(const items of data){
                const cek = await this.prisma.cities.findUnique({
                    where: {id_kota: items.id_kota}
                })
                if(!cek){
                    throw new BadRequestException("Kota tidak valid")
                }

                const check = await this.prisma.kecamatan.findFirst({
                    where: {
                        kecamatan: toTitleCase(items.kecamatan),
                        id_kota: items.id_kota
                    }
                })

                if(check){
                    throw new BadRequestException("Kecamatan sudah terdaftar")
                }
            }

            const newkec = await this.prisma.kecamatan.createMany({
                data: data.map((k) => ({
                    kecamatan: toTitleCase(k.kecamatan),
                    id_kota: k.id_kota
                }))
            })

            return {
                message: "Berhasil menambahkan kecamatan",
                data: newkec
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }

    async edit(id_kec:number, data:UpdateKecamatanDto){
        try {
            const cek = await this.prisma.kecamatan.findUnique({
                where: {id_kec:id_kec}
            })

            if(!cek){
                throw new BadRequestException("Kecamatan tidak ditemukan")
            }

            const updated = await this.prisma.kecamatan.update({
                where: {id_kec: id_kec},
                data: {
                    kecamatan: toTitleCase(data.kecamatan),
                    id_kota: data.id_kota,
                    updated_at: getCurrentDatetime()
                }
            })

            return {
                message: "Berhasil mengedit data kecamatan",
                data: updated
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }

    async delete(id_kec:number){
        try {
            const cek = await this.prisma.kecamatan.findUnique({
                where: {id_kec: id_kec}
            })

            if(!cek){
                throw new BadRequestException("Data kecamatan tidak ditemukan")
            }

            await this.prisma.alamat.deleteMany({
                where: {
                    id_kec: id_kec
                }
            })

            await this.prisma.kelurahan.deleteMany({
                where: {
                    id_kec: id_kec
                }
            })

            await this.prisma.kecamatan.delete({
                where: {id_kec: id_kec}
            })

            return {
                message: "Berhasil menghapus kecamatan"
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }

    async delmany(ids:number[]){
        try {
            const cek = await this.prisma.kecamatan.findMany({
                where: {
                    id_kec: {
                        in: ids
                    }
                }
            })

            if(cek.length != ids.length){
                throw new BadRequestException("Ada beberapa id yang tidak valid")
            }

            await this.prisma.alamat.deleteMany({
                where: {
                    id_kec: {
                        in: ids
                    }
                }
            })

            await this.prisma.kelurahan.deleteMany({
                where: {
                    id_kec: {
                        in: ids
                    }
                }
            })

            await this.prisma.kecamatan.deleteMany({
                where: {
                    id_kec: {
                        in: ids
                    }
                }
            })

            return {
                message: "Berhasil menghapus beberapa kecamatan"
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }
}