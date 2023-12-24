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
exports.GroceryItem = void 0;
const graphql_1 = require("@nestjs/graphql");
let GroceryItem = class GroceryItem {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GroceryItem.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], GroceryItem.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GroceryItem.prototype, "imageUrl", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GroceryItem.prototype, "value", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], GroceryItem.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GroceryItem.prototype, "listId", void 0);
GroceryItem = __decorate([
    (0, graphql_1.ObjectType)()
], GroceryItem);
exports.GroceryItem = GroceryItem;
//# sourceMappingURL=grocery-item.model.js.map