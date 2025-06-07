import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { AlamatService } from "./alamat.service";
import { JwtAuthGuard } from "../../auth/guards/jwt.guard";
import { AuthenticatedRequest } from "../iduser.interface";
import { UserAddress } from "./interfaces/getAlamat.interface";
import { CreateAlamatDto } from "./dto/create-alamat.dto";

@Controller('alamat')
export class AlamatController{
    constructor(private readonly alamatService:AlamatService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async get(@Req() req:AuthenticatedRequest) :Promise<UserAddress[]>{
        return this.alamatService.get(req.user.id_user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('new')
    async new(@Req() req:AuthenticatedRequest, @Body() body:CreateAlamatDto){
        return this.alamatService.new(req.user.id_user, body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('del/:id_alamat')
    async delete(
        @Req() req:AuthenticatedRequest,
        @Param('id_alamat') id_alamat:string
    ){
        return this.alamatService.delete(req.user.id_user, id_alamat)
    }
}