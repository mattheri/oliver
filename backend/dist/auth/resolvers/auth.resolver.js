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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const user_model_1 = require("../../users/models/user.model");
const graphql_1 = require("@nestjs/graphql");
const login_dto_1 = require("../dto/login.dto");
const auth_service_1 = require("../services/auth.service");
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../../users/decorators/current-user.decorator");
const sign_up_dto_1 = require("../dto/sign-up.dto");
const gql_request_decorator_1 = require("../decorators/gql-request.decorator");
const local_gql_auth_guard_1 = require("../guard/local-gql-auth.guard");
const session_guard_1 = require("../guard/session.guard");
const jwt_gql_auth_guard_1 = require("../guard/jwt-gql-auth.guard");
const refresh_jwt_gql_auth_guard_1 = require("../guard/refresh-jwt-gql-auth.guard");
const Logout_model_1 = require("../models/Logout.model");
const error_constants_1 = require("../constants/error.constants");
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    async login(input, req) {
        if (!req.user)
            throw new common_1.UnauthorizedException(error_constants_1.ERRORS.USER_NOT_LOGGED_IN);
        return req.user;
    }
    async register(input, req) {
        if (!req.user)
            throw new common_1.UnauthorizedException(error_constants_1.ERRORS.USER_NOT_LOGGED_IN);
        return req.user;
    }
    async me(user) {
        return user;
    }
    async refreshToken(user) {
        if (!user) {
            throw new common_1.BadRequestException(error_constants_1.ERRORS.USER_NOT_FOUND);
        }
        return user;
    }
    async logout(req) {
        req.logOut({
            keepSessionInfo: false,
        }, (err) => {
            if (err) {
                throw new common_1.BadRequestException(err);
            }
        });
        return {
            success: true,
        };
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.User),
    (0, common_1.UseGuards)(local_gql_auth_guard_1.LocalGqlAuthGuard, session_guard_1.SessionLocalAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, gql_request_decorator_1.GqlReq)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.User),
    (0, common_1.UseGuards)(local_gql_auth_guard_1.LocalGqlAuthGuard, session_guard_1.SessionLocalAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, gql_request_decorator_1.GqlReq)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_up_dto_1.SignUpDto, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "register", null);
__decorate([
    (0, graphql_1.Query)(() => user_model_1.User || null),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "me", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.User),
    (0, common_1.UseGuards)(refresh_jwt_gql_auth_guard_1.RefreshJwtGqlAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "refreshToken", null);
__decorate([
    (0, graphql_1.Mutation)(() => Logout_model_1.Logout),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, gql_request_decorator_1.GqlReq)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "logout", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_model_1.User),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map