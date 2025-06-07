import { Module } from "@nestjs/common";
import { AlamatController } from "./alamat.controller";
import { AlamatService } from "./alamat.service";

@Module({
    controllers: [AlamatController],
    providers: [AlamatService]
})
export class AlamatModule{}