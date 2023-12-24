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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalGqlAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const passport_1 = require("@nestjs/passport");
let LocalGqlAuthGuard = class LocalGqlAuthGuard extends (0, passport_1.AuthGuard)('local') {
    constructor() {
        super();
    }
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const { input: { email, password }, } = ctx.getArgs();
        const isRegister = ctx.getInfo().fieldName === 'register';
        const req = ctx.getContext().req;
        req.body.email = email;
        req.body.password = password;
        req.body.register = isRegister;
        return req;
    }
};
LocalGqlAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LocalGqlAuthGuard);
exports.LocalGqlAuthGuard = LocalGqlAuthGuard;
//# sourceMappingURL=local-gql-auth.guard.js.map