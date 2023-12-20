import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { JwtPayload } from '../interfaces/auth.interfaces';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_REFRESH_SECRET,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: JwtPayload) {
    const refreshToken = req.get('Authorization').replace('Bearer', '').trim();
    const user = this.authService.refreshToken(payload.sub, refreshToken);
    return user;
  }
}
