import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateProfesiDto } from "./dto/create-profesi.dto";
import { toTitleCase } from "../../utils/title.util";
import { UpdateProfesiDto } from "./dto/update-profesi.dto";
import { getCurrentDatetime } from "../../utils/current-date.util";

@Injectable()
export class ProfesiService{
    constructor(private prisma:PrismaService){}

    async create(data:CreateProfesiDto){
        try {
            const cek = await this.prisma.profession.findFirst({
                where: {profession: toTitleCase(data.profesi)}
            })

            if(cek){
                throw new BadRequestException("Profesi sudah ada")
            }

            const newProf = await this.prisma.$transaction(async (tx) => {
                const prof = await tx.profession.create({
                    data: {
                        profession: toTitleCase(data.profesi)
                    }
                })

                const id = prof.id_profesi;

                const datamap = data.id_cat.map(p => ({
                    id_profesi: id,
                    id_prof_cat: p
                }))

                const detail = await tx.profession_detail.createMany({
                    data: datamap
                })

                return {prof, detail};
            })

            return {
                message: 'Berhasil menambahkan profesi',
                data : {
                    profesi: newProf.prof.profession
                }
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            if(error.code === 'P2003'){
                throw new BadRequestException("kategori yang dipilih tidak valid")
            }
            console.error("error menambahkan profesi : ", error)
            throw new InternalServerErrorException("Kesalahan pada server");
        }
    }

    async edit(id_prof:number, data:UpdateProfesiDto){
        try {
            const cek = await this.prisma.profession.findUnique({
                where: {id_profesi:id_prof}
            })

            if(!cek){
                throw new BadRequestException("Profesi tidak ditemukan")
            }

            const check = await this.prisma.profession.findFirst({
                where: {
                    profession: toTitleCase(data.profesi),
                    id_profesi: {
                        not: id_prof
                    }
                }
            })

            if(check){
                throw new BadRequestException("profesi sudah ada")
            }

            await this.prisma.profession_detail.deleteMany({
                where: {id_profesi: id_prof}
            })

            const updated = await this.prisma.$transaction(async(tx) => {
                const newprof = await tx.profession.update({
                    where: {id_profesi: id_prof},
                    data: {
                        profession: toTitleCase(data.profesi),
                        updated_at: getCurrentDatetime()
                    }
                })

                const id = newprof.id_profesi;

                const detailmap = data.cats.map(p => ({
                    id_profesi: id,
                    id_prof_cat: p
                }))

                const newdetail = await tx.profession_detail.createMany({
                    data: detailmap
                })

                return {newprof, newdetail};
            })

            return {
                message: 'Berhasil mengubah data',
                data: {
                    profesi: updated.newprof.profession
                }
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            if(error.code === 'P2003'){
                throw new BadRequestException("kategori yang dipilih tidak valid")
            }
            console.error("error menambahkan profesi : ", error)
            throw new InternalServerErrorException("Kesalahan pada server");
        }
    }

    async delete(id_prof:number){
        try {
            const cek = await this.prisma.profession.findUnique({
                where: {id_profesi: id_prof}
            })
            
            if(!cek){
                throw new BadRequestException("Profesi tidak ditemukan")
            }

            await this.prisma.$transaction(async(tx) => {
                await tx.profession_detail.deleteMany({
                    where: {id_profesi: id_prof}
                })
                await tx.profession.delete({
                    where: {id_profesi: id_prof}
                })
            })

            return {
                message: 'Berhasil menghapus profesi'
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            console.error("error menghapus profesi : ", error)
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }

    async deleteMany(ids:number[]){
        try {
            const cek = await this.prisma.profession.findMany({
                where: {
                    id_profesi: {
                        in: ids
                    }
                }
            })

            if(cek.length != ids.length){
                throw new BadRequestException("Ada profesi yang tidak valid")
            }

            await this.prisma.$transaction(async(tx) => {
                await tx.profession_detail.deleteMany({
                    where: {
                        id_profesi: {
                            in: ids
                        }
                    }
                })
                await tx.profession.deleteMany({
                    where: {
                        id_profesi: {
                            in: ids
                        }
                    }
                })
            })

            return {
                message: 'Berhasil menghapus profesi yang dipilih'
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException("Kesalahan pada server")
        }
    }
}