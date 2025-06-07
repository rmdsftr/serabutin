import { Controller, Post, UseGuards } from "@nestjs/common";
import { AlamatService } from "./alamat.service";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";

@Controller('alamat')
export class AlamatController{
    constructor(private readonly alamatService:AlamatService){}

    @UseGuards(JwtAuthGuard)
    @Post('new')
    async new(){
        
    }
}