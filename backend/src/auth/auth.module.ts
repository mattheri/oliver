import { UsersModule } from 'src/users/users.module';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { SessionSerializer } from './guard/serialize-user.guard';
import { AuthResolver } from './resolvers/auth.resolver';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { RefreshTokenStrategy } from './strategies/refresh-jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      session: true,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: configService.get<string>('JWT_EXPIRES_IN'),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [
    JwtStrategy,
    RefreshTokenStrategy,
    LocalStrategy,
    AuthResolver,
    AuthService,
    SessionSerializer,
  ],
})
export class AuthModule {}
