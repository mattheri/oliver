import { PassportSerializer } from '@nestjs/passport';
export declare class SessionSerializer extends PassportSerializer {
    serializeUser(user: any, done: CallableFunction): any;
    deserializeUser(payload: any, done: CallableFunction): any;
}
