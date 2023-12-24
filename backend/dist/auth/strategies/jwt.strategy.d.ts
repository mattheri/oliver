import { Request } from 'express';
import { Strategy } from 'passport-jwt';
import { JwtPayload } from '../interfaces/auth.interfaces';
import { AuthService } from '../services/auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(req: Request, payload: JwtPayload): Promise<{
        accessToken: string;
        id: string;
        name: string;
        email: string;
        provider: string;
        refreshToken: string;
        created: Date;
        updated: Date;
    }>;
}
export {};
