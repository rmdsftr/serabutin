import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateKelurahanDto } from "./dto/create-kelurahan.dto";
import { toTitleCase } from "../../utils/title.util";
import { UpdateKelurahanDto } from "./dto/edit-kel.dto";
import { getCurrentDatetime } from "../../utils/current-date.util";

@Injectable()
export class KelurahanService{
    constructor(private prisma:PrismaService){}

    async new(data:CreateKelurahanDto[]){
        try {
            const duplicates = new Set();
            for(const items of data){
                const key = `${toTitleCase(items.kelurahan)}-${items.id_kec}`;
                if(duplicates.has(key)){
                    throw new BadRequestException("Ada data duplikat saat input")
                }
                duplicates.add(key);
            }

            for(const items of data){
                const cek = await this.prisma.kecamatan.findUnique({
                    where: {id_kec: items.id_kec}
                })

                if(!cek){
                    throw new BadRequestException("Kecamatan tidak valid")
                }

                const check = await this.prisma.kelurahan.findFirst({
                    where: {
                        kelurahan: toTitleCase(items.kelurahan),
                        id_kec: items.id_kec
                    }
                })

                if(check){
                    throw new BadRequestException("Kelurahan sudah ada")
                }
            }

            const newKel = await this.prisma.kelurahan.createMany({
                data: data.map((k) => ({
                    kelurahan: toTitleCase(k.kelurahan),
                    id_kec: k.id_kec
                }))
            })

            return {
                message: "Berhasil menambahkan kelurahan",
                data: newKel
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }

    async edit(data:UpdateKelurahanDto, id_kel:number){
        try {
            const cek = await this.prisma.kelurahan.findUnique({
                where: {id_kel: id_kel}
            })

            if(!cek){
                throw new BadRequestException("Kelurahan tidak ditemukan")
            }

            const updated = await this.prisma.kelurahan.update({
                where: {id_kel: id_kel},
                data: {
                    kelurahan: toTitleCase(data.kelurahan),
                    id_kec: data.id_kec,
                    updated_at: getCurrentDatetime()
                }
            })

            return{
                message: "Berhasil mengedit kelurahan",
                data:updated
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }

    async delete(id_kel:number){
        try {
            const cek = await this.prisma.kelurahan.findUnique({
                where: {id_kel: id_kel}
            })

            if(!cek){
                throw new BadRequestException("Kelurahan tidak ditemukan")
            }

            await this.prisma.alamat.deleteMany({
                where: {
                    id_kel: id_kel
                }
            })

            await this.prisma.kelurahan.delete({
                where: {id_kel: id_kel}
            })

            return {
                message: "Berhasil menghapus kelurahan"
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
            const cek = await this.prisma.kelurahan.findMany({
                where: {
                    id_kel: {
                        in: ids
                    }
                }
            })

            if(cek.length != ids.length){
                throw new BadRequestException("Beberapa ID kelurahan tidak valid")
            }

            await this.prisma.alamat.deleteMany({
                where: {
                    id_kel: {
                        in: ids
                    }
                }
            })

            await this.prisma.kelurahan.deleteMany({
                where: {
                    id_kel: {
                        in: ids
                    }
                }
            })

            return {
                message: "Berhasil menghapus kelurahan"
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }
}