import { Body, Controller, Delete, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { TipeService } from "./tipe.service";
import { CreateTipeDto } from "./dto/create-tipe.dto";
import { UpdateTipeDto } from "./dto/update-tipe.dto";
import { DeleteManyTipeDto } from "./dto/delmany-tipe.dto";

@Controller('tipe')
export class TipeController{
    constructor(private readonly tipeService:TipeService){}

    @Post('new')
    async new(@Body() body:CreateTipeDto[]){
        return this.tipeService.new(body);
    }

    @Patch('edit/:id_tipe')
    async edit(@Param('id_tipe', ParseIntPipe) id_tipe:number, @Body() body:UpdateTipeDto){
        return this.tipeService.edit(id_tipe, body)
    }

    @Delete('delete/:id_tipe')
    async delete(@Param('id_tipe', ParseIntPipe) id_tipe:number){
        return this.tipeService.delete(id_tipe);
    }

    @Delete('delete-many')
    async delmany(@Body() dels:DeleteManyTipeDto){
        return this.tipeService.delmany(dels.ids);
    }
}