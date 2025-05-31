import { Body, Controller, Delete, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { KotaService } from "./kota.service";
import { CreateKotaDto } from "./dto/create-kota.dto";
import { UpdateKotaDto } from "./dto/update-kota.dto";
import { DeleteManyKotaDto } from "./dto/delmany-kota.dto";

@Controller('kota')
export class KotaController{
    constructor(private readonly kotaService:KotaService){}

    @Post('new')
    async create(@Body() body:CreateKotaDto[]){
        return this.kotaService.create(body);
    }

    @Patch('edit/:id_kota')
    async edit(@Body() body:UpdateKotaDto, @Param('id_kota', ParseIntPipe) id_kota:number){
        return this.kotaService.edit(body, id_kota);
    }

    @Delete('delete/:id_kota')
    async delete(@Param('id_kota', ParseIntPipe) id_kota:number){
        return this.kotaService.delete(id_kota);
    }

    @Delete('delete-many')
    async deleteMany(@Body() dels:DeleteManyKotaDto){
        return this.kotaService.deleteMany(dels.ids);
    }
}