import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateTipeDto } from "./dto/create-tipe.dto";
import { toTitleCase } from "../../utils/title.util";
import { UpdateTipeDto } from "./dto/update-tipe.dto";
import { getCurrentDatetime } from "../../utils/current-date.util";

@Injectable()
export class TipeService{
    constructor(private prisma:PrismaService){}

    async new(data:CreateTipeDto[]){
        try {
            const duplicates = new Set();
            for(const items of data){
                const key = `${toTitleCase(items.tipe)}`
                if(duplicates.has(key)){
                    throw new BadRequestException("Duplikat entry tipe saat input")
                }
                duplicates.add(key)
            }

            for(const items of data){
                const cek = await this.prisma.tipe_alamat.findFirst({
                    where: {tipe_alamat: toTitleCase(items.tipe)}
                })
                if(cek){
                    throw new BadRequestException("Tipe alamat sudah ada")
                }
            }

            const newtipe = await this.prisma.tipe_alamat.createMany({
                data: data.map((t) => ({
                    tipe_alamat: toTitleCase(t.tipe)
                }))
            })

            return {
                message: "Berhasil menambahkan tipe alamat",
                data: newtipe
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }

    async edit(id_tipe:number, data:UpdateTipeDto){
        try {
            const cekid = await this.prisma.tipe_alamat.findUnique({
                where: {id_tipe: id_tipe}
            })

            if(!cekid){
                throw new BadRequestException("Tipe alamat tidak ditemukan")
            }

            const updated = await this.prisma.tipe_alamat.update({
                where: {id_tipe: id_tipe},
                data: {
                    tipe_alamat: toTitleCase(data.tipe),
                    updated_at: getCurrentDatetime()
                }
            })

            return {
                message: "Berhasil mengedit tipe alamat",
                data: updated
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }

    async delete(id_tipe:number){
        try {
            const cek = await this.prisma.tipe_alamat.findUnique({
                where: {id_tipe: id_tipe}
            })

            if(!cek){
                throw new BadRequestException("Tipe alamat tidak ditemukan")
            }

            await this.prisma.alamat.deleteMany({
                where: {id_tipe: id_tipe}
            })

            await this.prisma.tipe_alamat.delete({
                where: {id_tipe: id_tipe}
            })

            return {
                message: "Berhasil menghapus tipe alamat"
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
            const cek = await this.prisma.tipe_alamat.findMany({
                where: {
                    id_tipe: {
                        in: ids
                    }
                }
            })

            if(cek.length != ids.length){
                throw new BadRequestException("Ada tipe alamat yang tidak valid")
            }

            await this.prisma.alamat.deleteMany({
                where: {
                    id_tipe: {
                        in: ids
                    }
                }
            })

            await this.prisma.tipe_alamat.deleteMany({
                where: {
                    id_tipe: {
                        in: ids
                    }
                }
            })

            return {
                message: "Berhasil menghapus tipe alamat"
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }
}