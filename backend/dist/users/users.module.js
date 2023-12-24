"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const db_service_1 = require("../db/services/db.service");
const common_1 = require("@nestjs/common");
const user_resolver_1 = require("./resolvers/user.resolver");
const hash_service_1 = require("./services/hash.service");
const user_service_1 = require("./services/user.service");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        providers: [user_service_1.UserService, db_service_1.DatabaseService, hash_service_1.HashService, user_resolver_1.UserResolver],
        exports: [user_service_1.UserService, hash_service_1.HashService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map