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
exports.GroceryItemService = void 0;
const db_service_1 = require("../../../db/services/db.service");
const common_1 = require("@nestjs/common");
let GroceryItemService = class GroceryItemService {
    constructor(db) {
        this.db = db;
    }
    async getGroceryItemsByListId(input) {
        return this.db.item.findMany({
            where: {
                listId: input.listId,
            },
        });
    }
    async getGroceryItemById(input) {
        return this.db.item.findUnique({ where: { id: input.id } });
    }
    async createGroceryItem(input) {
        return this.db.item.create({
            data: {
                name: input.name,
                code: input.code,
                imageUrl: input.imageUrl,
                quantity: input.quantity,
                value: input.value,
                list: {
                    connect: {
                        id: input.listId,
                    },
                },
            },
        });
    }
    async createGroceryItemBulk(input) {
        return Promise.all(input.map((item) => this.db.item.create({
            data: {
                name: item.name,
                code: item.code,
                imageUrl: item.imageUrl,
                quantity: item.quantity,
                value: item.value,
                list: {
                    connect: {
                        id: item.listId,
                    },
                },
            },
        })));
    }
    async updateGroceryItem(id, input) {
        return this.db.item.update({
            where: {
                id,
            },
            data: {
                name: input.name,
                code: input.code,
                imageUrl: input.imageUrl,
                quantity: input.quantity,
                value: input.value,
            },
        });
    }
    async updateGroceryItemBulk(input) {
        return Promise.all(input.map((item) => this.db.item.update({
            where: {
                id: item.id,
            },
            data: {
                name: item.name,
                code: item.code,
                imageUrl: item.imageUrl,
                quantity: item.quantity,
                value: item.value,
            },
        })));
    }
    async deleteGroceryItem(input) {
        return this.db.item.delete({
            where: {
                id: input.id,
            },
        });
    }
    async deleteGroceryItemBulk(input) {
        this.db.item.deleteMany({
            where: {
                id: {
                    in: input.map((item) => item.id),
                },
            },
        });
    }
};
GroceryItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DatabaseService])
], GroceryItemService);
exports.GroceryItemService = GroceryItemService;
//# sourceMappingURL=grocery-item.service.js.map