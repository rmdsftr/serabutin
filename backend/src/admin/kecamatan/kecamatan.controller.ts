import { Body, Controller, Delete, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { KecamatanService } from "./kecamatan.service";
import { CreateKecamatanDto } from "./dto/create-kec.dto";
import { UpdateKecamatanDto } from "./dto/edit-kec.dto";
import { DelmanyKecamatanDto } from "./dto/delmany-kec.dto";

@Controller('kecamatan')
export class KecamatanController{
    constructor(private readonly kecamatanService:KecamatanService){}

    @Post('new')
    async new(@Body() body:CreateKecamatanDto[]){
        return this.kecamatanService.new(body);
    }

    @Patch('edit/:id_kec')
    async edit(@Param('id_kec', ParseIntPipe) id_kec:number, @Body() body:UpdateKecamatanDto){
        return this.kecamatanService.edit(id_kec, body);
    }

    @Delete('delete/:id_kec')
    async delete(@Param('id_kec', ParseIntPipe) id_kec:number){
        return this.kecamatanService.delete(id_kec);
    }

    @Delete('delete-many')
    async delmany(@Body() dels:DelmanyKecamatanDto){
        return this.kecamatanService.delmany(dels.ids);
    }
}