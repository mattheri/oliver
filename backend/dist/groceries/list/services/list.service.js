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
exports.ListService = void 0;
const db_service_1 = require("../../../db/services/db.service");
const common_1 = require("@nestjs/common");
let ListService = class ListService {
    constructor(db) {
        this.db = db;
    }
    dbItemToModel(item) {
        return {
            id: item.id,
            value: item.value,
            code: item.code,
            quantity: item.quantity,
            imageUrl: item.imageUrl,
            listId: item.listId,
        };
    }
    dbListWithoutItemsToModel(list) {
        const listModel = {
            allowDelete: list.allowDelete.split(','),
            allowEdit: list.allowEdit.split(','),
            allowView: list.allowView.split(','),
            created: list.created,
            description: list.description,
            id: list.id,
            name: list.name,
            owner: list.ownerId,
            updated: list.updated,
        };
        return listModel;
    }
    dbListToModel(list) {
        var _a;
        const listModel = this.dbListWithoutItemsToModel(list);
        return Object.assign(Object.assign({}, listModel), { items: ((_a = list.items) === null || _a === void 0 ? void 0 : _a.map(this.dbItemToModel.bind(this))) || [] });
    }
    async getListById(id) {
        const list = await this.db.list.findUnique({ where: { id } });
        if (!list) {
            throw new common_1.HttpException('List not found', 404);
        }
        return this.dbListWithoutItemsToModel(list);
    }
    async getListsByUserId(userId) {
        const lists = await this.db.list.findMany({ where: { ownerId: userId } });
        return lists.map(this.dbListWithoutItemsToModel.bind(this));
    }
    async createList(input, user) {
        const createdList = await this.db.list.create({
            data: {
                allowDelete: user.id,
                allowEdit: user.id,
                allowView: user.id,
                description: input.description,
                name: input.name,
                owner: {
                    connect: user,
                },
                items: {
                    connectOrCreate: input.items.map((item) => ({
                        where: {
                            id: item.id,
                        },
                        create: {
                            code: item.code,
                            name: item.value,
                            value: item.value,
                            quantity: item.quantity,
                            imageUrl: item.imageUrl,
                        },
                    })),
                },
            },
            include: {
                items: !!input.items && input.items.length > 0,
                owner: true,
            },
        });
        return this.dbListToModel(createdList);
    }
    async addReadOnlyUserToList(input) {
        try {
            const list = await this.db.list.findUnique({
                where: { id: input.listId },
            });
            if (!list || !list.allowEdit.includes(input.email)) {
                throw new Error('You do not have permission to add users to this list');
            }
            const updatedList = await this.db.list.update({
                where: { id: input.listId },
                data: {
                    allowView: [...list.allowView].join(','),
                },
            });
            return this.dbListWithoutItemsToModel(updatedList);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, 403);
        }
    }
    async addManyReadOnlyUsersToList(input, user) {
        try {
            const list = await this.db.list.findUnique({
                where: { id: input[0].listId },
            });
            if (!list || list.ownerId !== user.id) {
                throw new Error('You do not have permission to add users to this list');
            }
            const updatedList = await this.db.list.update({
                where: { id: input[0].listId },
                data: {
                    allowView: [...list.allowView, input[0].email].join(','),
                },
            });
            return this.dbListWithoutItemsToModel(updatedList);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, 403);
        }
    }
};
ListService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DatabaseService])
], ListService);
exports.ListService = ListService;
//# sourceMappingURL=list.service.js.map