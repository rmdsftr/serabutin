import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UserAddress } from "./interfaces/getAlamat.interface";
import { CreateAlamatDto } from "./dto/create-alamat.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AlamatService{
    constructor(private prisma:PrismaService){}

    async get(id_user:string) :Promise<UserAddress[]>{
        try {
            const cek = await this.prisma.users.findUnique({
                where: {id_user: id_user}
            })

            if(!cek){
                throw new BadRequestException("Pengguna tidak ditemukan")
            }

            const alamatraw = await this.prisma.alamat.findMany({
                where: {id_user: id_user},
                select: {
                    id_alamat:true,
                    alamat:true,
                    catatan:true,
                    is_default:true,
                    tipe_alamat: {
                        select: {
                            tipe_alamat:true
                        }
                    },
                    kelurahan: {
                        select: {
                            kelurahan:true
                        }
                    },
                    kecamatan: {
                        select: {
                            kecamatan:true
                        }
                    },
                    cities: {
                        select: {
                            nama_kota:true
                        }
                    },
                    provinces: {
                        select: {
                            nama_prov:true
                        }
                    }
                }
            })

            const alamat: UserAddress[] = alamatraw.map((item) => ({
                id_alamat: item.id_alamat,
                alamat: item.alamat ?? '',
                catatan: item.catatan ?? '',
                tipe_alamat: item.tipe_alamat?.tipe_alamat ?? '',
                kelurahan: item.kelurahan?.kelurahan ?? '',
                kecamatan: item.kecamatan?.kecamatan ?? '',
                kota: item.cities?.nama_kota ?? '',
                provinsi: item.provinces?.nama_prov ?? '',
                is_default: item.is_default ?? false
            }))

            return alamat;
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }

    async new(id_user:string, data:CreateAlamatDto){
        try {
            const cek = await this.prisma.users.findUnique({
                where: {id_user: id_user}
            })

            if(!cek){
                throw new BadRequestException("Pengguna tidak ditemukan")
            }

            const id = uuidv4();

            const input = await this.prisma.alamat.create({
                data: {
                    id_alamat: id,
                    id_user: id_user,
                    alamat: data.alamat,
                    catatan: data.catatan,
                    latitude: data.latitude,
                    longitude: data.longitude,
                    is_default: data.isDefault,
                    id_tipe: data.id_tipe,
                    id_kel: data.id_kel,
                    id_kec: data.id_kec,
                    id_kota: data.id_kota,
                    id_prov: data.id_prov
                }
            })

            return {
                message: "Berhasil menambahkan alamat",
                data: input
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }

    async delete(id_user:string, id_alamat:string){
        try {
            const cek = await this.prisma.alamat.findMany({
                where: {
                    id_alamat: id_alamat,
                    id_user: id_user
                }
            })

            if(!cek){
                throw new BadRequestException("Pengguna dan alamat tidak ditemukan")
            }

            await this.prisma.alamat.delete({
                where: {
                    id_alamat: id_alamat
                }
            })

            return {
                message: "Berhasil menghapus alamat"
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error)
        }
    }
}