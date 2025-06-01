import { Module } from "@nestjs/common";
import { ProvinsiModule } from "./provinsi/provinsi.module";
import { KotaModule } from "./kota/kota.module";
import { ProfCatModule } from "./kategori/profesi/prof-cat.module";
import { PrismaModule } from "../prisma/prisma.module";
import { ProfesiModule } from "./profesi/profesi.module";

@Module({
    imports: [PrismaModule, ProvinsiModule, ProfesiModule, 
        KotaModule, ProfCatModule]
})
export class AdminModule{}