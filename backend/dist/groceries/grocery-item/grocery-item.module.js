"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroceryItemModule = void 0;
const db_service_1 = require("../../db/services/db.service");
const common_1 = require("@nestjs/common");
const grocery_item_resolver_1 = require("./resolvers/grocery-item.resolver");
const grocery_item_service_1 = require("./services/grocery-item.service");
let GroceryItemModule = class GroceryItemModule {
};
GroceryItemModule = __decorate([
    (0, common_1.Module)({
        providers: [grocery_item_resolver_1.GroceryItemResolver, grocery_item_service_1.GroceryItemService, db_service_1.DatabaseService],
        exports: [grocery_item_service_1.GroceryItemService],
    })
], GroceryItemModule);
exports.GroceryItemModule = GroceryItemModule;
//# sourceMappingURL=grocery-item.module.js.map