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
exports.Item = void 0;
const graphql_1 = require("@nestjs/graphql");
const category_model_1 = require("./category.model");
const spec_model_1 = require("./spec.model");
let Item = class Item {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Item.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Item.prototype, "brand", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Item.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Item.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => [spec_model_1.Spec]),
    __metadata("design:type", Array)
], Item.prototype, "specs", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_model_1.Category),
    __metadata("design:type", category_model_1.Category)
], Item.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Item.prototype, "codeUrl", void 0);
Item = __decorate([
    (0, graphql_1.ObjectType)()
], Item);
exports.Item = Item;
//# sourceMappingURL=item.model.js.map