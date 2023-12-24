import { Request } from 'express';
import { Strategy } from 'passport-jwt';
import { JwtPayload } from '../interfaces/auth.interfaces';
import { AuthService } from '../services/auth.service';
declare const RefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(req: Request, payload: JwtPayload): Promise<{
        accessToken: string;
        refreshToken: string;
        id: string;
        name: string;
        email: string;
        provider: string;
        password: string;
        created: Date;
        updated: Date;
    }>;
}
export {};
