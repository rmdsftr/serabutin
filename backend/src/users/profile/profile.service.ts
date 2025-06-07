import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { ProfileResponse } from "./interfaces/getprofile.interface";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { UpdateProfileResponse } from "./interfaces/updateprofile.interface";
import { toTitleCase } from "../../utils/title.util";

@Injectable()
export class ProfileService{
    constructor(private prisma:PrismaService){}

    async getProfile(id_user:string): Promise<ProfileResponse>{
        try {
            const user = await this.prisma.users.findUnique({
                where: {id_user: id_user}
            })

            if(!user){
                throw new BadRequestException("Pengguna tidak ditemukan")
            }

            return {
                username: user.username,
                nama: user.nama,
                email: user.email,
                gender: user.gender,
                birthdate: user.birth_date,
                foto: user.foto ? Buffer.from(user.foto) : Buffer.alloc(0),
                bio: user.bio,
                join: user.created_at
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }

    async updatePhoto(id_user:string, file:Buffer){
        try {
            const user = await this.prisma.users.findUnique({
                where: {id_user: id_user}
            })

            if(!user){
                throw new BadRequestException("Pengguna tidak ditemukan")
            }

            await this.prisma.users.update({
                where: {id_user: id_user},
                data: {
                    foto: file
                }
            })

            return {message : "Foto profil berhasil diperbarui"}
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }

    async updateProfile(id_user:string, data:UpdateProfileDto): Promise<UpdateProfileResponse>{
        try {
            const user = await this.prisma.users.findUnique({
                where: {id_user: id_user}
            })
            
            if(!user){
                throw new BadRequestException("Pengguna tidak ditemukan")
            }

            const updated = await this.prisma.users.update({
                where: {id_user: id_user},
                data: {
                    nama: toTitleCase(data.nama),
                    gender: data.gender,
                    bio: data.bio,
                    birth_date: new Date(data.birthdate)
                }
            })

            return {
                message: "Berhasil mengupdate profile",
                nama: updated.nama,
                bio: updated.bio,
                birthdate: updated.birth_date,
                gender: updated.gender
            }
        } catch (error) {
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }
}