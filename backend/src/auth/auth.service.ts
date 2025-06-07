import { Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import *  as bcrypt from 'bcrypt';
import { toTitleCase } from "../utils/title.util";
import { LoginUserDto } from "./dto/login-user.dto";
import { JwtService } from "@nestjs/jwt";
import { AuthResponse } from "./interfaces/auth.response";
import { jwtPayLoad } from "./interfaces/payload.interface";

@Injectable()
export class AuthService{
    constructor(
        private prisma:PrismaService, 
        private jwtService:JwtService){}

    generateIdUser(): string {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(2, 8);
        return `USER-${timestamp}-${random}`;
    }

    async register(data:CreateUserDto): Promise<AuthResponse>{
        try {
            const username = await this.prisma.users.findUnique({
                where: {username:data.username}
            })

            if(username){
                throw new UnauthorizedException("Username sudah digunakan")
            }

            const email = await this.prisma.users.findUnique({
                where: {email: data.email}
            })

            if(email){
                throw new UnauthorizedException("Email sudah digunakan")
            }

            if(data.sandi != data.konfirmpw){
                throw new UnauthorizedException("Kata sandi tidak sesuai")
            }

            const hashedpw = await bcrypt.hash(data.sandi, 10);

            const newUser = await this.prisma.users.create({
                data: {
                    id_user: this.generateIdUser(),
                    username: data.username,
                    nama: toTitleCase(data.nama),
                    email: data.email,
                    sandi: hashedpw,
                    gender: data.gender,
                    birth_date: new Date(data.birthdate),
                    status_user: 'Active'
                }
            })

            const payload: jwtPayLoad = {
                id_user: newUser.id_user,
                username: newUser.username,
                email: newUser.email
            }

            const access_token = this.jwtService.sign(payload);

            return {
                access_token,
                user: {
                    id: newUser.id_user,
                    username: newUser.username,
                    email: newUser.email
                }
            }
        } catch (error) {
            if(error instanceof UnauthorizedException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }

    async login(data:LoginUserDto): Promise<AuthResponse>{
        try {
            const existingUser = await this.prisma.users.findFirst({
                where: {
                    OR: [
                        {username: data.id},
                        {email: data.id}
                    ]
                }
            })

            if(!existingUser){
                throw new UnauthorizedException("Pengguna tidak terdaftar")
            }

            const cekpw = await bcrypt.compare(data.sandi, existingUser.sandi);

            if(!cekpw){
                throw new UnauthorizedException("Username/email atau assword salah")
            }

            const payload: jwtPayLoad = {
                id_user: existingUser.id_user,
                username: existingUser.username,
                email: existingUser.email
            }

            const access_token = this.jwtService.sign(payload);

            return{
                access_token,
                user: {
                    id: existingUser.id_user,
                    username: existingUser.username,
                    email: existingUser.email
                }
            }
        } catch (error) {
            if(error instanceof UnauthorizedException){
                throw error;
            }
            throw new InternalServerErrorException(error);
        }
    }

    async validateUser(payload:jwtPayLoad){
        const user = await this.prisma.users.findUnique({
            where: {id_user: payload.id_user},
            select: {
                id_user: true,
                username:true,
                email:true
            }
        })

        if(!user){
            throw new UnauthorizedException("Pengguna tidak ditemukan")
        }

        return user;
    }
}