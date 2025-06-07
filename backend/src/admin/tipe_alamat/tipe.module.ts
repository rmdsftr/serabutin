import { Module } from "@nestjs/common";
import { TipeController } from "./tipe.controller";
import { TipeService } from "./tipe.service";

@Module({
    controllers: [TipeController],
    providers: [TipeService]
})
export class TipeModule{}