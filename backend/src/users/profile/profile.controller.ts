import { BadRequestException, Body, Controller, Get, Patch, Req, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { JwtAuthGuard } from "../../auth/guards/jwt.guard";
import { AuthenticatedRequest } from "../iduser.interface";
import { ProfileResponse } from "./interfaces/getprofile.interface";
import { FileInterceptor } from "@nestjs/platform-express";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { UpdateProfileResponse } from "./interfaces/updateprofile.interface";

@Controller('profile')
export class ProfileController{
    constructor(private readonly profileService:ProfileService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getProfile(@Req() req: AuthenticatedRequest): Promise<ProfileResponse>{
        return this.profileService.getProfile(req.user.id_user);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('foto')
    @UseInterceptors(FileInterceptor('foto'))
    async updatePhoto(
        @Req() req:AuthenticatedRequest,
        @UploadedFile() file: Express.Multer.File){
            if(!file){
                throw new BadRequestException("Pilih foto terlebih dahulu")
            }
            return this.profileService.updatePhoto(req.user.id_user, file.buffer)
    }

    @UseGuards(JwtAuthGuard)
    @Patch('edit')
    async updateProfile(
        @Req() req:AuthenticatedRequest,
        @Body() body:UpdateProfileDto
    ): Promise<UpdateProfileResponse>{
        return this.profileService.updateProfile(req.user.id_user, body)
    }

}