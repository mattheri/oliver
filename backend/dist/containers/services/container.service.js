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
exports.ContainerService = void 0;
const db_service_1 = require("../../db/services/db.service");
const common_1 = require("@nestjs/common");
let ContainerService = class ContainerService {
    constructor(db) {
        this.db = db;
    }
    async getContainerById(id) {
        return this.db.container.findUnique({ where: { id } });
    }
    async getContainersByUserEmail(email) {
        return this.db.container.findMany({ where: { owner: { email: email } } });
    }
    async getContainersByUserId(id) {
        return this.db.container.findMany({ where: { ownerId: id } });
    }
    async getContainerItemsByContainerId(id) {
        return this.db.containerItem.findMany({
            where: { containerId: id },
        });
    }
    async addContainerItem(input) {
        return this.db.containerItem.create({
            data: Object.assign(Object.assign({}, input), { quantity: Math.max(input.quantity, 1) }),
        });
    }
    async updateContainerItem(input) {
        return this.db.containerItem.update({
            where: { id: input.id },
            data: Object.assign(Object.assign({}, input), { quantity: Math.max(input.quantity, 1) }),
        });
    }
    async containerItemIsGroceryItem(input) {
        const containerItemLinkedItemId = await this.db.containerItem.findUnique({
            where: { id: input.id },
            select: {
                linkedItemId: true,
            },
        });
        if (!containerItemLinkedItemId.linkedItemId)
            return null;
        return this.db.item.findUnique({
            where: { id: containerItemLinkedItemId.linkedItemId },
            include: {
                list: true,
            },
        });
    }
};
ContainerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DatabaseService])
], ContainerService);
exports.ContainerService = ContainerService;
//# sourceMappingURL=container.service.js.map