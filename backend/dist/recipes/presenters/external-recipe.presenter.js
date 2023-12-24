"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalRecipePresenter = void 0;
const common_1 = require("@nestjs/common");
let ExternalRecipePresenter = class ExternalRecipePresenter {
    externalRecipeToRecipe(externalRecipe, userId) {
        const image = externalRecipe.strMealThumb
            ? {
                id: externalRecipe.idMeal,
                src: externalRecipe.strMealThumb,
            }
            : null;
        const url = externalRecipe.strSource ? externalRecipe.strSource : null;
        return {
            id: externalRecipe.idMeal,
            title: externalRecipe.strMeal,
            instructions: this.formatInstructions(externalRecipe.strInstructions),
            userId,
            ingredients: this.filterIngredients(externalRecipe),
            image,
            url,
            isExternalSrc: true,
        };
    }
    externalRecipeCategoryToRecipeCategory(externalRecipeCategpru) {
        return {
            name: externalRecipeCategpru.strCategory,
            url: `/recipes/categories/${externalRecipeCategpru.strCategory.toLowerCase()}`,
            image: externalRecipeCategpru.strCategoryThumb,
        };
    }
    filterIngredients(externalRecipe) {
        const ingredients = Object.entries(externalRecipe).filter(([key, value]) => {
            return key.includes('Ingredient') && value;
        });
        const measures = Object.entries(externalRecipe).filter(([key, value]) => {
            return key.includes('Measure') && value;
        });
        return ingredients.map(([_, value], index) => {
            const measure = measures[index][1];
            return `${value} ${measure}`;
        });
    }
    formatInstructions(instructions) {
        if (!instructions) {
            return [];
        }
        return instructions
            .split('\n')
            .filter((instruction) => instruction)
            .map((instruction) => instruction.trim());
    }
};
ExternalRecipePresenter = __decorate([
    (0, common_1.Injectable)()
], ExternalRecipePresenter);
exports.ExternalRecipePresenter = ExternalRecipePresenter;
//# sourceMappingURL=external-recipe.presenter.js.map