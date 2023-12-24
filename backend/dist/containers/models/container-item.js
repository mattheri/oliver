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
exports.ContainerItem = void 0;
const grocery_item_model_1 = require("../../groceries/grocery-item/models/grocery-item.model");
const graphql_1 = require("@nestjs/graphql");
let ContainerItem = class ContainerItem extends (0, graphql_1.OmitType)(grocery_item_model_1.GroceryItem, [
    'quantity',
    'listId',
    'id',
]) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ContainerItem.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ContainerItem.prototype, "quantity", void 0);
ContainerItem = __decorate([
    (0, graphql_1.ObjectType)()
], ContainerItem);
exports.ContainerItem = ContainerItem;
//# sourceMappingURL=container-item.js.map