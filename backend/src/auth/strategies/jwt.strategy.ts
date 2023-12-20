import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { JwtPayload, UserWithoutPassword } from '../interfaces/auth.interfaces';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: JwtPayload) {
    const accessToken = req.get('Authorization').replace('Bearer', '').trim();
    let user = req.user as UserWithoutPassword;

    if (!user) {
      user = await this.authService.getUser(payload.sub);
    }

    if (!user) {
      return null;
    }

    return { ...user, accessToken };
  }
}
