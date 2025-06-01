import { Module } from "@nestjs/common";
import { ProfesiController } from "./profesi.controller";
import { ProfesiService } from "./profesi.service";

@Module({
    controllers: [ProfesiController],
    providers: [ProfesiService]
})
export class ProfesiModule{}