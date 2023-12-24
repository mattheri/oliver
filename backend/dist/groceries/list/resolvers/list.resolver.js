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
exports.ListResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const list_model_1 = require("../models/list.model");
const list_service_1 = require("../services/list.service");
const add_readonly_user_list_dto_1 = require("../dto/add-readonly-user-list.dto");
const create_list_dto_1 = require("../dto/create-list.dto");
const grocery_item_service_1 = require("../../grocery-item/services/grocery-item.service");
const current_user_decorator_1 = require("../../../users/decorators/current-user.decorator");
const common_1 = require("@nestjs/common");
const jwt_gql_auth_guard_1 = require("../../../auth/guard/jwt-gql-auth.guard");
const get_list_by_id_dto_1 = require("../dto/get-list-by-id.dto");
let ListResolver = class ListResolver {
    constructor(listService, groceryItemService) {
        this.listService = listService;
        this.groceryItemService = groceryItemService;
    }
    async list(input) {
        return this.listService.getListById(input.id);
    }
    async lists(user) {
        if (!user)
            throw new common_1.UnauthorizedException();
        return this.listService.getListsByUserId(user.id);
    }
    async createList(input, user) {
        return this.listService.createList(input, user);
    }
    async addReadOnlyUserToList(input) {
        return this.listService.addReadOnlyUserToList(input);
    }
    async items(list) {
        return this.groceryItemService.getGroceryItemsByListId({ listId: list.id });
    }
};
__decorate([
    (0, graphql_1.Query)(() => list_model_1.List),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_list_by_id_dto_1.GetListByIdDto]),
    __metadata("design:returntype", Promise)
], ListResolver.prototype, "list", null);
__decorate([
    (0, graphql_1.Query)(() => [list_model_1.List]),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListResolver.prototype, "lists", null);
__decorate([
    (0, graphql_1.Mutation)(() => list_model_1.List),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_list_dto_1.CreateListDto, Object]),
    __metadata("design:returntype", Promise)
], ListResolver.prototype, "createList", null);
__decorate([
    (0, graphql_1.Mutation)(() => list_model_1.List),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_readonly_user_list_dto_1.AddReadonlyUserListDto]),
    __metadata("design:returntype", Promise)
], ListResolver.prototype, "addReadOnlyUserToList", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_model_1.List]),
    __metadata("design:returntype", Promise)
], ListResolver.prototype, "items", null);
ListResolver = __decorate([
    (0, graphql_1.Resolver)(() => list_model_1.List),
    __metadata("design:paramtypes", [list_service_1.ListService,
        grocery_item_service_1.GroceryItemService])
], ListResolver);
exports.ListResolver = ListResolver;
//# sourceMappingURL=list.resolver.js.map