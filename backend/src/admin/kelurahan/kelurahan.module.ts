import { Module } from "@nestjs/common";
import { KelurahanController } from "./kelurahan.controller";
import { KelurahanService } from "./kelurahan.service";

@Module({
    controllers: [KelurahanController],
    providers: [KelurahanService]
})
export class KelurahanModule{}