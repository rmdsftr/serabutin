import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";
import { jwtPayLoad } from "../interfaces/payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        configService: ConfigService,
        private authService: AuthService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('jwt.secret') || 'fallback-secret'
        })
    }

    async validate(payload: jwtPayLoad){
        const user = await this.authService.validateUser(payload);
        if(!user){
            throw new UnauthorizedException('Token tidak valid')
        }
        return user;
    }
}