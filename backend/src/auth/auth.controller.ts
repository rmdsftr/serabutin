import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { AuthResponse } from "./interfaces/auth.response";

@Controller('auth')
export class AuthController{
    constructor(private readonly authService:AuthService){}

    @Post('register')
    async register(@Body() body:CreateUserDto): Promise<AuthResponse>{
        return this.authService.register(body);
    }

    @Post('login')
    async login(@Body() body:LoginUserDto): Promise<AuthResponse>{
        return this.authService.login(body);
    }
}