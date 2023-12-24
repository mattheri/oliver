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
exports.ListWithoutItems = exports.List = void 0;
const graphql_1 = require("@nestjs/graphql");
const grocery_item_model_1 = require("../../grocery-item/models/grocery-item.model");
let List = class List {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], List.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], List.prototype, "allowEdit", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], List.prototype, "allowView", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], List.prototype, "allowDelete", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], List.prototype, "owner", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], List.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], List.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], List.prototype, "created", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], List.prototype, "updated", void 0);
__decorate([
    (0, graphql_1.Field)(() => [grocery_item_model_1.GroceryItem]),
    __metadata("design:type", Array)
], List.prototype, "items", void 0);
List = __decorate([
    (0, graphql_1.ObjectType)()
], List);
exports.List = List;
class ListWithoutItems extends (0, graphql_1.OmitType)(List, ['items']) {
}
exports.ListWithoutItems = ListWithoutItems;
//# sourceMappingURL=list.model.js.map