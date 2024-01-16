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
exports.RecipeInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const recipe_adapter_1 = require("../adapters/recipe.adapter");
let RecipeInterceptor = class RecipeInterceptor {
    constructor(recipeAdapter) {
        this.recipeAdapter = recipeAdapter;
    }
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((data) => {
            if (!data)
                return data;
            if (Array.isArray(data)) {
                return data.map(this.recipeAdapter.dbRecipeToGqlRecipe.bind(this.recipeAdapter));
            }
            else if (typeof data === 'object') {
                return this.recipeAdapter.dbRecipeToGqlRecipe(data);
            }
        }));
    }
};
RecipeInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [recipe_adapter_1.RecipeAdapter])
], RecipeInterceptor);
exports.RecipeInterceptor = RecipeInterceptor;
//# sourceMappingURL=recipe.interceptor.js.map