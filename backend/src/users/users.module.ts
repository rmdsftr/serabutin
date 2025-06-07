import { Module } from "@nestjs/common";
import { ProfileModule } from "./profile/profile.module";
import { PrismaModule } from "../prisma/prisma.module";
import { AlamatModule } from "./alamat/alamat.module";

@Module({
    imports: [PrismaModule, ProfileModule, AlamatModule]
})
export class UsersModule{}