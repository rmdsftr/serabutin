import { Module } from "@nestjs/common";
import { ProfCatController } from "./prof-cat.controller";
import { ProfCatService } from "./prof-cat.service";

@Module({
    controllers: [ProfCatController],
    providers: [ProfCatService]
})
export class ProfCatModule{}