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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("../models/user.model");
const common_1 = require("@nestjs/common");
const jwt_gql_auth_guard_1 = require("../../auth/guard/jwt-gql-auth.guard");
const update_user_dto_1 = require("../dto/update-user.dto");
const user_service_1 = require("../services/user.service");
const current_user_decorator_1 = require("../decorators/current-user.decorator");
const update_password_dto_1 = require("../dto/update-password.dto");
const find_user_by_email_dto_1 = require("../dto/find-user-by-email.dto");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async updateUser(input, user) {
        return this.userService.updateUser(user.id, input);
    }
    async updatePassword(input, user) {
        return this.userService.updatePassword(user.id, input.currentPassword, input.newPassword);
    }
    async user(input) {
        return this.userService.findUserByEmail(input);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.User),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto,
        user_model_1.User]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.User),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_password_dto_1.UpdatePasswordDto,
        user_model_1.User]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updatePassword", null);
__decorate([
    (0, graphql_1.Query)(() => user_model_1.User, { nullable: true }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_user_by_email_dto_1.FindUserByEmailDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_model_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map