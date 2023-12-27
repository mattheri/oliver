/// <reference types="passport" />
import { User } from 'src/users/models/user.model';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from '../services/auth.service';
import { SignUpDto } from '../dto/sign-up.dto';
import { Request } from 'express';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(input: LoginDto, req: Request): Promise<Express.User>;
    register(input: SignUpDto, req: Request): Promise<Express.User>;
    me(user: User): Promise<User>;
    refreshToken(user?: User): Promise<User>;
    logout(req: Request): Promise<{
        success: boolean;
    }>;
}
