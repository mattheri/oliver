import { Request } from 'express';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(req: Request, email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        id: string;
        name: string;
        email: string;
        provider: string;
        created: Date;
        updated: Date;
    }>;
}
export {};
