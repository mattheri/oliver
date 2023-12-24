"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const hash_service_1 = require("../../users/services/hash.service");
const user_service_1 = require("../../users/services/user.service");
const users_constants_1 = require("../../users/users.constants");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const error_constants_1 = require("../constants/error.constants");
let AuthService = class AuthService {
    constructor(userService, hashService, jwtService, configService) {
        this.userService = userService;
        this.hashService = hashService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async validateUser(email, password) {
        try {
            const user = await this.userService.getUserByEmail(email);
            if (!user) {
                throw error_constants_1.ERRORS.USER_NOT_FOUND;
            }
            if (!(await this.hashService.compare(password, user.password))) {
                throw error_constants_1.ERRORS.INVALID_CREDENTIALS;
            }
            const { password: userPassword } = user, result = __rest(user, ["password"]);
            return result;
        }
        catch (e) {
            const message = e;
            switch (message) {
                case error_constants_1.ERRORS.USER_NOT_FOUND:
                    throw new common_1.UnauthorizedException(error_constants_1.ERRORS.USER_NOT_FOUND);
                case error_constants_1.ERRORS.INVALID_CREDENTIALS:
                    throw new common_1.UnauthorizedException(error_constants_1.ERRORS.INVALID_CREDENTIALS);
                default:
                    throw new common_1.UnauthorizedException();
            }
        }
    }
    async getUser(id) {
        const user = await this.userService.getUser(id);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const { password } = user, result = __rest(user, ["password"]);
        return Object.assign({}, result);
    }
    async login(payload) {
        const user = await this.validateUser(payload.email, payload.password);
        const tokens = await this.getTokens(user.id, user.email);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return Object.assign(Object.assign({}, user), tokens);
    }
    async register(payload) {
        const userExists = !!(await this.userService.getUserByEmail(payload.email));
        if (userExists) {
            throw new common_1.UnauthorizedException(error_constants_1.ERRORS.USER_ALREADY_EXISTS);
        }
        const createdUser = await this.userService.createUser(Object.assign(Object.assign({}, payload), { provider: users_constants_1.Provider.Local }));
        const tokens = await this.getTokens(createdUser.id, createdUser.email);
        await this.updateRefreshToken(createdUser.id, tokens.refreshToken);
        return Object.assign(Object.assign({}, createdUser), tokens);
    }
    async getAccessToken(userId, email) {
        return this.jwtService.signAsync({
            sub: userId,
            email,
        }, {
            secret: this.configService.get('JWT_SECRET'),
            expiresIn: this.configService.get('JWT_EXPIRES_IN'),
        });
    }
    async getRefreshToken(userId, email) {
        return this.jwtService.signAsync({
            sub: userId,
            email,
        }, {
            secret: this.configService.get('JWT_REFRESH_SECRET'),
            expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN'),
        });
    }
    async getTokens(userId, email) {
        const [accessToken, refreshToken] = await Promise.all([
            this.getAccessToken(userId, email),
            this.getRefreshToken(userId, email),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
    async updateRefreshToken(userId, refreshToken) {
        const token = await this.hashService.hash(refreshToken);
        return this.userService.updateUser(userId, { refreshToken: token });
    }
    async refreshToken(userId, refreshToken) {
        const user = await this.userService.getUser(userId);
        if (!user)
            throw new common_1.UnauthorizedException();
        const isRefreshTokenValid = await this.hashService.compare(refreshToken, user.refreshToken);
        if (!isRefreshTokenValid)
            throw new common_1.UnauthorizedException();
        const tokens = await this.getTokens(user.id, user.email);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return Object.assign(Object.assign({}, user), tokens);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        hash_service_1.HashService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map