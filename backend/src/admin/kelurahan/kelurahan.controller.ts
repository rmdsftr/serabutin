import { Body, Controller, Delete, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { KelurahanService } from "./kelurahan.service";
import { CreateKelurahanDto } from "./dto/create-kelurahan.dto";
import { UpdateKelurahanDto } from "./dto/edit-kel.dto";
import { DelmanyKelurahanDto } from "./dto/delmany-kel.dto";

@Controller('kelurahan')
export class KelurahanController{
    constructor(private readonly kelurahanService:KelurahanService){}

    @Post('new')
    async new(@Body() body:CreateKelurahanDto[]){
        return this.kelurahanService.new(body);
    }

    @Patch('edit/:id_kel')
    async edit(@Body() body:UpdateKelurahanDto, @Param('id_kel', ParseIntPipe) id_kel:number){
        return this.kelurahanService.edit(body, id_kel)
    }

    @Delete('delete/:id_kel')
    async delete(@Param('id_kel', ParseIntPipe) id_kel:number){
        return this.kelurahanService.delete(id_kel);
    }

    @Delete('delete-many')
    async delmany(@Body() dels:DelmanyKelurahanDto){
        return this.kelurahanService.delmany(dels.ids);
    }
}