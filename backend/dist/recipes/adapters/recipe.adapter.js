"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeAdapter = void 0;
const common_1 = require("@nestjs/common");
let RecipeAdapter = class RecipeAdapter {
    dbRecipeToGqlRecipe(dbRecipe) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const userId = dbRecipe.ownerId;
        const ingredients = (_b = (_a = dbRecipe.ingredients) === null || _a === void 0 ? void 0 : _a.split(',')) !== null && _b !== void 0 ? _b : [];
        const instructions = (_d = (_c = dbRecipe.instructions) === null || _c === void 0 ? void 0 : _c.split(',')) !== null && _d !== void 0 ? _d : [];
        const allowView = (_f = (_e = dbRecipe.allowView) === null || _e === void 0 ? void 0 : _e.split(',')) !== null && _f !== void 0 ? _f : [];
        const allowEdit = (_h = (_g = dbRecipe.allowEdit) === null || _g === void 0 ? void 0 : _g.split(',')) !== null && _h !== void 0 ? _h : [];
        const allowDelete = (_k = (_j = dbRecipe.allowDelete) === null || _j === void 0 ? void 0 : _j.split(',')) !== null && _k !== void 0 ? _k : [];
        const height = Array.isArray(dbRecipe === null || dbRecipe === void 0 ? void 0 : dbRecipe.image)
            ? (_m = (_l = dbRecipe === null || dbRecipe === void 0 ? void 0 : dbRecipe.image[0]) === null || _l === void 0 ? void 0 : _l.height) !== null && _m !== void 0 ? _m : 0
            : 0;
        const width = Array.isArray(dbRecipe === null || dbRecipe === void 0 ? void 0 : dbRecipe.image)
            ? (_p = (_o = dbRecipe === null || dbRecipe === void 0 ? void 0 : dbRecipe.image[0]) === null || _o === void 0 ? void 0 : _o.width) !== null && _p !== void 0 ? _p : 0
            : 0;
        const src = Array.isArray(dbRecipe === null || dbRecipe === void 0 ? void 0 : dbRecipe.image)
            ? (_r = (_q = dbRecipe === null || dbRecipe === void 0 ? void 0 : dbRecipe.image[0]) === null || _q === void 0 ? void 0 : _q.url) !== null && _r !== void 0 ? _r : null
            : null;
        return Object.assign(Object.assign({}, dbRecipe), { userId,
            ingredients,
            instructions,
            allowView,
            allowEdit,
            allowDelete, image: {
                height,
                width,
                src,
            } });
    }
};
RecipeAdapter = __decorate([
    (0, common_1.Injectable)()
], RecipeAdapter);
exports.RecipeAdapter = RecipeAdapter;
//# sourceMappingURL=recipe.adapter.js.map