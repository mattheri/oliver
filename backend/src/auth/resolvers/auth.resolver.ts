import { User } from 'src/users/models/user.model';

import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from '../services/auth.service';
import {
  BadRequestException,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { SignUpDto } from '../dto/sign-up.dto';
import { GqlReq } from '../decorators/gql-request.decorator';
import { Request } from 'express';
import { LocalGqlAuthGuard } from '../guard/local-gql-auth.guard';
import { SessionLocalAuthGuard } from '../guard/session.guard';
import { JwtGqlAuthGuard } from '../guard/jwt-gql-auth.guard';
import { RefreshJwtGqlAuthGuard } from '../guard/refresh-jwt-gql-auth.guard';
import { Logout } from '../models/Logout.model';
import { ERRORS } from '../constants/error.constants';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  @UseGuards(LocalGqlAuthGuard, SessionLocalAuthGuard)
  async login(@Args('input') input: LoginDto, @GqlReq() req: Request) {
    if (!req.user) throw new UnauthorizedException(ERRORS.USER_NOT_LOGGED_IN);

    return req.user;
  }

  @Mutation(() => User)
  @UseGuards(LocalGqlAuthGuard, SessionLocalAuthGuard)
  async register(@Args('input') input: SignUpDto, @GqlReq() req: Request) {
    if (!req.user) throw new UnauthorizedException(ERRORS.USER_NOT_LOGGED_IN);

    return req.user;
  }

  @Query(() => User || null)
  @UseGuards(JwtGqlAuthGuard)
  async me(@CurrentUser() user: User) {
    return user;
  }

  @Mutation(() => User)
  @UseGuards(RefreshJwtGqlAuthGuard)
  async refreshToken(@CurrentUser() user?: User) {
    if (!user) {
      throw new BadRequestException(ERRORS.USER_NOT_FOUND);
    }

    return user;
  }

  @Mutation(() => Logout)
  @UseGuards(JwtGqlAuthGuard)
  async logout(@GqlReq() req: Request) {
    req.logOut(
      {
        keepSessionInfo: false,
      },
      (err) => {
        if (err) {
          throw new BadRequestException(err);
        }
      },
    );

    return {
      success: true,
    };
  }
}
