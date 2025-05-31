import { Body, Controller, Delete, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ProvinsiService } from "./provinsi.service";
import { CreateProvinsiDto } from "./dto/create-prov.dto";
import { UpdateProvinsiDto } from "./dto/update-prov.dto";
import { DeleteManyProvinsiDto } from "./dto/delmany-provinsi.dto";

@Controller('provinsi')
export class ProvinsiController{
    constructor(private readonly provinsiService:ProvinsiService){}

    @Post('new')
    async create(@Body() body:CreateProvinsiDto[]){
        return this.provinsiService.create(body);
    }

    @Patch('edit/:id_prov')
    async edit(@Body() body:UpdateProvinsiDto, @Param('id_prov', ParseIntPipe) id_prov:number){
        return this.provinsiService.edit(body, id_prov);
    }

    @Delete('delete/:id_prov')
    async delete(@Param('id_prov', ParseIntPipe) id_prov:number){
        return this.provinsiService.delete(id_prov);
    }

    @Delete('delete-many')
    async deleteMany(@Body() dels:DeleteManyProvinsiDto){
        return this.provinsiService.deleteMany(dels.ids);
    }
}