import { Body, Controller, Delete, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ProfesiService } from "./profesi.service";
import { CreateProfesiDto } from "./dto/create-profesi.dto";
import { UpdateProfesiDto } from "./dto/update-profesi.dto";
import { DelmanyProfesiDto } from "./dto/delmany-profesi.dto";

@Controller('profesi')
export class ProfesiController{
    constructor(private readonly profesiService:ProfesiService){}

    @Post('new')
    async create(@Body() body:CreateProfesiDto){
        return this.profesiService.create(body);
    }

    @Patch('edit/:id_prof')
    async edit(@Param('id_prof', ParseIntPipe) id_prof:number, @Body() body:UpdateProfesiDto){
        return this.profesiService.edit(id_prof, body);
    }

    @Delete('delete/:id_prof')
    async delete(@Param('id_prof', ParseIntPipe) id_prof:number){
        return this.profesiService.delete(id_prof);
    }

    @Delete('delete-many')
    async deleteMany(@Body() dels:DelmanyProfesiDto){
        return this.profesiService.deleteMany(dels.ids);
    }
}