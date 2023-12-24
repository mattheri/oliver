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
exports.UserService = void 0;
const db_service_1 = require("../../db/services/db.service");
const common_1 = require("@nestjs/common");
const users_constants_1 = require("../users.constants");
const hash_service_1 = require("./hash.service");
let UserService = class UserService {
    constructor(db, hasher) {
        this.db = db;
        this.hasher = hasher;
    }
    async getUser(id) {
        return this.db.user.findUnique({ where: { id } });
    }
    async getUserByEmail(email) {
        return this.db.user.findUnique({ where: { email } });
    }
    async createUser({ email, name, provider = users_constants_1.Provider.Local, password, }) {
        const hashedPassword = await this.hasher.hash(password);
        const createdUser = await this.db.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                provider,
            },
            select: {
                id: true,
                email: true,
                name: true,
                provider: true,
                password: false,
                created: true,
                updated: true,
            },
        });
        return createdUser;
    }
    async updatePassword(id, currentPassword, newPassword) {
        const user = await this.db.user.findUnique({ where: { id } });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await this.hasher.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        const hashedPassword = await this.hasher.hash(newPassword);
        return this.db.user.update({
            where: { id },
            data: { password: hashedPassword },
        });
    }
    async updateUser(id, data) {
        return this.db.user.update({ where: { id }, data });
    }
    async findUserByEmail({ email }) {
        return this.db.user.findUnique({ where: { email } });
    }
    async deleteUserByEmail({ email }) {
        return this.db.user.delete({ where: { email } });
    }
    async deleteAllUsers() {
        return this.db.user.deleteMany();
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DatabaseService,
        hash_service_1.HashService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map