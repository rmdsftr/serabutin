import { Body, Controller, Delete, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ProfCatService } from "./prof-cat.service";
import { CreateCatProfDto } from "./dto/create-cat-prof.dto";
import { UpdateCatProfDto } from "./dto/update-cat-prof.dto";
import { DelCatProfDto } from "./dto/delmany-cat-prof.dto";

@Controller('kategori/profesi')
export class ProfCatController{
    constructor(private readonly profcatService:ProfCatService){}

    @Post('new')
    async create(@Body() body:CreateCatProfDto[]){
        return this.profcatService.create(body);
    }

    @Patch('edit/:id_prof_cat')
    async edit(@Body() body:UpdateCatProfDto, @Param('id_prof_cat', ParseIntPipe) id_prof_cat:number){
        return this.profcatService.edit(body, id_prof_cat);
    }

    @Delete('delete/:id_prof_cat')
    async delete(@Param('id_prof_cat', ParseIntPipe) id_prof_cat:number){
        return this.profcatService.delete(id_prof_cat);
    }

    @Delete('delete-many')
    async deleteMany(@Body() dels:DelCatProfDto){
        return this.profcatService.deleteMany(dels.ids);
    }
}