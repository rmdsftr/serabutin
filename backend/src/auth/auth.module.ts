import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async(configService:ConfigService) => ({
                secret: configService.get<string>('jwt.secret'),
                signOptions: configService.get<object>('jwt.signOptions')
            }),
            inject: [ConfigService]
        })
    ]
})
export class AuthModule{}