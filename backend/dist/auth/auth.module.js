"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const users_module_1 = require("../users/users.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const serialize_user_guard_1 = require("./guard/serialize-user.guard");
const auth_resolver_1 = require("./resolvers/auth.resolver");
const auth_service_1 = require("./services/auth.service");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const local_strategy_1 = require("./strategies/local.strategy");
const refresh_jwt_strategy_1 = require("./strategies/refresh-jwt.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule.register({
                session: true,
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    return {
                        secret: configService.get('JWT_SECRET'),
                        signOptions: {
                            expiresIn: configService.get('JWT_EXPIRES_IN'),
                        },
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [
            jwt_strategy_1.JwtStrategy,
            refresh_jwt_strategy_1.RefreshTokenStrategy,
            local_strategy_1.LocalStrategy,
            auth_resolver_1.AuthResolver,
            auth_service_1.AuthService,
            serialize_user_guard_1.SessionSerializer,
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map