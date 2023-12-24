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
exports.Box = void 0;
const graphql_1 = require("@nestjs/graphql");
const container_category_model_1 = require("./container-category.model");
const container_item_1 = require("./container-item");
let Box = class Box {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Box.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Box.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Box.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], Box.prototype, "main", void 0);
__decorate([
    (0, graphql_1.Field)(() => container_category_model_1.BoxCategory),
    __metadata("design:type", String)
], Box.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Box.prototype, "created", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Box.prototype, "updated", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], Box.prototype, "allowView", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], Box.prototype, "allowEdit", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], Box.prototype, "allowDelete", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Box.prototype, "owner", void 0);
__decorate([
    (0, graphql_1.Field)(() => [container_item_1.ContainerItem]),
    __metadata("design:type", Array)
], Box.prototype, "items", void 0);
Box = __decorate([
    (0, graphql_1.ObjectType)()
], Box);
exports.Box = Box;
//# sourceMappingURL=container.model.js.map