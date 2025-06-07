import { Module } from "@nestjs/common";
import { ProvinsiModule } from "./provinsi/provinsi.module";
import { KotaModule } from "./kota/kota.module";
import { ProfCatModule } from "./kategori/profesi/prof-cat.module";
import { PrismaModule } from "../prisma/prisma.module";
import { ProfesiModule } from "./profesi/profesi.module";
import { KecamatanModule } from "./kecamatan/kecamatan.module";
import { KelurahanModule } from "./kelurahan/kelurahan.module";
import { TipeModule } from "./tipe_alamat/tipe.module";

@Module({
    imports: [PrismaModule, ProvinsiModule, ProfesiModule, TipeModule,
        KotaModule, ProfCatModule, KecamatanModule, KelurahanModule]
})
export class AdminModule{}