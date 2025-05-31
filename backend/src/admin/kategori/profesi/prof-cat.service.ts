import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { CreateCatProfDto } from "./dto/create-cat-prof.dto";
import { toTitleCase } from "../../../utils/title.util";
import { UpdateCatProfDto } from "./dto/update-cat-prof.dto";
import { getCurrentDatetime } from "../../../utils/current-date.util";

@Injectable()
export class ProfCatService{
    constructor(private prisma:PrismaService){}

    async create(data:CreateCatProfDto[]){
        try {
            for(const item of data){
                const catprof = await this.prisma.profession_category.findFirst({
                    where: {profession_category: toTitleCase(item.prof_cat)}
                })
                if(catprof){
                    throw new BadRequestException("Kategori profesi sudah ada")
                }
            }

            const newProfCats = await this.prisma.profession_category.createMany({
                data: data.map((n) => ({
                    profession_category: toTitleCase(n.prof_cat)
                }))
            })

            return {
                message: 'Berhasil menambahkan kategori profesi',
                data : newProfCats
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            console.error("error menambahkan kategori profesi : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async edit(data:UpdateCatProfDto, id_prof_cat:number){
        try {
            const cekprof = await this.prisma.profession_category.findUnique({
                where: {id_prof_cat: id_prof_cat}
            })

            if(!cekprof){
                throw new BadRequestException("Kategori profesi tidak ada")
            }

            const updatedprof = await this.prisma.profession_category.update({
                where: {id_prof_cat: id_prof_cat},
                data: {
                    profession_category: toTitleCase(data.prof_cat),
                    updated_at: getCurrentDatetime()
                }
            })

            return {
                message: 'Berhasil mengedit kategori profesi',
                data : {
                    prof_cat : updatedprof.profession_category,
                    at: updatedprof.updated_at
                }
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            console.error("error mengedit kategori profesi : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async delete(id_prof_cat:number){
        try {
            const cekcat = await this.prisma.profession_category.findUnique({
                where: {id_prof_cat: id_prof_cat}
            })

            if(!cekcat){
                throw new BadRequestException("Kategori profesi tidak ditemukan")
            }

            await this.prisma.profession_category.delete({
                where: {id_prof_cat: id_prof_cat}
            })

            return {
                message: 'Berhasil menghapus kategori profesi'
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            console.error("error menghapus kategori profesi : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async deleteMany(ids:number[]){
        try {
            const cekids = await this.prisma.profession_category.findMany({
                where: {
                    id_prof_cat: {
                        in: ids
                    }
                }
            })

            if(cekids.length != ids.length){
                throw new BadRequestException("Ada id kategori profesi yang tidak valid")
            }

            await this.prisma.profession_category.deleteMany({
                where: {
                    id_prof_cat: {
                        in: ids
                    }
                }
            })

            return {
                message: 'Berhasil menghapus kategori-kategori profesi'
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            console.error("error menghapus kategori profesi : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }
}