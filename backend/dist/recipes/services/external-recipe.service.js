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
exports.ExternalRecipeService = void 0;
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
const external_recipe_presenter_1 = require("../presenters/external-recipe.presenter");
const recipes_constants_1 = require("../recipes.constants");
let ExternalRecipeService = class ExternalRecipeService {
    constructor(externalRecipePresenter) {
        this.externalRecipePresenter = externalRecipePresenter;
        this.apiUrl = recipes_constants_1.EXTERNAL_RECIPE_API_URL;
        this.http = axios_1.default.create({
            baseURL: this.apiUrl,
        });
        this.endpoints = recipes_constants_1.EXTERNAL_RECIPE_ENDPOINTS;
        this.queryParams = recipes_constants_1.EXTERNAL_RECIPE_QUERY_PARAMS;
    }
    async getCategories() {
        try {
            const { data } = await this.http.get(`/${this.endpoints.CATEGORIES}`);
            return data.categories.map(this.externalRecipePresenter.externalRecipeCategoryToRecipeCategory.bind(this.externalRecipePresenter));
        }
        catch (e) {
            const error = e;
            console.error(error.message);
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getRecipesByCategory(category) {
        try {
            const { data } = await this.http.get(`/${this.endpoints.FILTER}?${this.queryParams.FILTER_BY_CATEGORY}=${category}`);
            return Promise.all(data.meals.map(this.externalRecipePresenter.externalRecipeToRecipe.bind(this.externalRecipePresenter)));
        }
        catch (e) {
            const error = e;
            console.error(error.message);
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getRecipeById(id, userId) {
        try {
            const { data } = await this.http.get(`/${this.endpoints.LOOKUP}?${this.queryParams.SEARCH_BY_ID}=${id}`);
            const recipe = await Promise.all(data.meals.map(async (externalRecipe) => this.externalRecipePresenter.externalRecipeToRecipe(externalRecipe, userId)));
            return recipe[0];
        }
        catch (e) {
            const error = e;
            console.error(error.message);
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getRandomRecipe(userId) {
        try {
            const { data } = await this.http.get(`/${this.endpoints.RANDOM}`);
            const recipes = await Promise.all(data.meals.map(async (externalRecipe) => this.externalRecipePresenter.externalRecipeToRecipe(externalRecipe, userId)));
            return recipes[0];
        }
        catch (e) {
            const error = e;
            console.error(error.message);
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getMultipeRandomRecipes(userId, amount = 10) {
        try {
            const promises = Array.from({ length: amount }).map(() => {
                return this.getRandomRecipe(userId);
            });
            return Promise.all(promises);
        }
        catch (e) {
            const error = e;
            console.error(error.message);
            throw new common_1.BadRequestException(error.message);
        }
    }
};
ExternalRecipeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [external_recipe_presenter_1.ExternalRecipePresenter])
], ExternalRecipeService);
exports.ExternalRecipeService = ExternalRecipeService;
//# sourceMappingURL=external-recipe.service.js.map