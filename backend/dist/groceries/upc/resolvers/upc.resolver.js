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
exports.UpcResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const item_model_1 = require("../models/item.model");
const upc_service_1 = require("../services/upc.service");
const item_by_upc_dto_1 = require("../dto/item-by-upc.dto");
let UpcResolver = class UpcResolver {
    constructor(upcService) {
        this.upcService = upcService;
    }
    async itemByUpc(input) {
        return this.upcService.getUpc(input.code);
    }
};
__decorate([
    (0, graphql_1.Query)(() => item_model_1.Item, { nullable: true }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_by_upc_dto_1.ItemByUpcDto]),
    __metadata("design:returntype", Promise)
], UpcResolver.prototype, "itemByUpc", null);
UpcResolver = __decorate([
    (0, graphql_1.Resolver)(() => item_model_1.Item),
    __metadata("design:paramtypes", [upc_service_1.UpcService])
], UpcResolver);
exports.UpcResolver = UpcResolver;
//# sourceMappingURL=upc.resolver.js.map