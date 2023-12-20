import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: CallableFunction): any {
    return done(null, user);
  }
  deserializeUser(payload: any, done: CallableFunction): any {
    return done(null, payload);
  }
}
