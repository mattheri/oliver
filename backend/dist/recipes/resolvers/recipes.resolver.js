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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesResolver = void 0;
const jwt_gql_auth_guard_1 = require("../../auth/guard/jwt-gql-auth.guard");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const get_recipe_by_id_dto_1 = require("../dto/get-recipe-by-id.dto");
const recipe_model_1 = require("../models/recipe.model");
const recipes_service_1 = require("../services/recipes.service");
const current_user_decorator_1 = require("../../users/decorators/current-user.decorator");
const create_recipe_dto_1 = require("../dto/create-recipe.dto");
const update_recipe_dto_1 = require("../dto/update-recipe.dto");
const delete_recipe_dto_1 = require("../dto/delete-recipe.dto");
const delete_many_recipe_dto_1 = require("../dto/delete-many-recipe.dto");
const update_allow_view_dto_1 = require("../dto/update-allow-view.dto");
const update_allow_edit_dto_1 = require("../dto/update-allow-edit.dto");
const update_allow_delete_dto_1 = require("../dto/update-allow-delete.dto");
const get_random_recipes_dto_1 = require("../dto/get-random-recipes.dto");
const get_external_recipe_by_id_dto_1 = require("../dto/get-external-recipe-by-id.dto");
let RecipesResolver = class RecipesResolver {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    async recipe(input) {
        return this.recipeService.getRecipeById(input.id);
    }
    async recipesByUser(user) {
        if (!user)
            throw new common_1.UnauthorizedException();
        return this.recipeService.getRecipesByUserEmail(user.email, true);
    }
    async wishlistRecipes(user) {
        if (!user)
            throw new common_1.UnauthorizedException();
        return this.recipeService.getRecipesByUserEmail(user.email, false);
    }
    async recipes(user) {
        return this.recipeService.getRecipesByUserId(user.id);
    }
    async createRecipe(input, user) {
        if (!user)
            throw new common_1.UnauthorizedException();
        return this.recipeService.createRecipe(Object.assign(Object.assign({}, input), { userId: user.id }));
    }
    async updateRecipe(input) {
        return this.recipeService.updateRecipe(input);
    }
    async deleteRecipe(input) {
        return this.recipeService.deleteRecipe(input);
    }
    async deleteManyRecipes(input) {
        return this.recipeService.deleteManyRecipes(input);
    }
    async addAllowView(input, user) {
        return this.recipeService.addAllowView(input, user);
    }
    async removeAllowView(input, user) {
        return this.recipeService.removeAllowView(input, user);
    }
    async addAllowEdit(input, user) {
        return this.recipeService.addAllowEdit(input, user);
    }
    async removeAllowEdit(input, user) {
        return this.recipeService.removeAllowEdit(input, user);
    }
    async addAllowDelete(input, user) {
        return this.recipeService.addAllowDelete(input, user);
    }
    async removeAllowDelete(input, user) {
        return this.recipeService.removeAllowDelete(input, user);
    }
    async recipesByUserEmail(user) {
        return this.recipeService.getRecipesByUserEmail(user.email, true);
    }
    async randomRecipes(input, user) {
        return this.recipeService.getRandomRecipes(input, user);
    }
    async externalRecipe(input, user) {
        return this.recipeService.getExternalRecipeById(input.id, user);
    }
};
__decorate([
    (0, graphql_1.Query)(() => recipe_model_1.Recipe),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_recipe_by_id_dto_1.GetRecipeByIdDto]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "recipe", null);
__decorate([
    (0, graphql_1.Query)(() => [recipe_model_1.Recipe]),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "recipesByUser", null);
__decorate([
    (0, graphql_1.Query)(() => [recipe_model_1.Recipe]),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "wishlistRecipes", null);
__decorate([
    (0, graphql_1.Query)(() => [recipe_model_1.Recipe]),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "recipes", null);
__decorate([
    (0, graphql_1.Mutation)(() => recipe_model_1.Recipe),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_recipe_dto_1.CreateRecipeDto, Object]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "createRecipe", null);
__decorate([
    (0, graphql_1.Mutation)(() => recipe_model_1.Recipe),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_recipe_dto_1.UpdateRecipeDto]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "updateRecipe", null);
__decorate([
    (0, graphql_1.Mutation)(() => recipe_model_1.Recipe),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_recipe_dto_1.DeleteRecipeDto]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "deleteRecipe", null);
__decorate([
    (0, graphql_1.Mutation)(() => [recipe_model_1.Recipe]),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_many_recipe_dto_1.DeleteManyRecipeDto]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "deleteManyRecipes", null);
__decorate([
    (0, graphql_1.Mutation)(() => recipe_model_1.Recipe),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_allow_view_dto_1.UpdateAllowViewDto, Object]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "addAllowView", null);
__decorate([
    (0, graphql_1.Mutation)(() => recipe_model_1.Recipe),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_allow_view_dto_1.UpdateAllowViewDto, Object]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "removeAllowView", null);
__decorate([
    (0, graphql_1.Mutation)(() => recipe_model_1.Recipe),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_allow_edit_dto_1.UpdateAllowEditDto, Object]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "addAllowEdit", null);
__decorate([
    (0, graphql_1.Mutation)(() => recipe_model_1.Recipe),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_allow_edit_dto_1.UpdateAllowEditDto, Object]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "removeAllowEdit", null);
__decorate([
    (0, graphql_1.Mutation)(() => recipe_model_1.Recipe),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_allow_delete_dto_1.UpdateAllowDeleteDto, Object]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "addAllowDelete", null);
__decorate([
    (0, graphql_1.Mutation)(() => recipe_model_1.Recipe),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_allow_delete_dto_1.UpdateAllowDeleteDto, Object]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "removeAllowDelete", null);
__decorate([
    (0, graphql_1.Query)(() => [recipe_model_1.Recipe]),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "recipesByUserEmail", null);
__decorate([
    (0, graphql_1.Query)(() => [recipe_model_1.Recipe]),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_random_recipes_dto_1.GetRandomRecipesDto, Object]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "randomRecipes", null);
__decorate([
    (0, graphql_1.Query)(() => recipe_model_1.Recipe),
    (0, common_1.UseGuards)(jwt_gql_auth_guard_1.JwtGqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_external_recipe_by_id_dto_1.GetExternalRecipeByIdDto, Object]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "externalRecipe", null);
RecipesResolver = __decorate([
    (0, graphql_1.Resolver)(() => recipe_model_1.Recipe),
    __metadata("design:paramtypes", [recipes_service_1.RecipeService])
], RecipesResolver);
exports.RecipesResolver = RecipesResolver;
//# sourceMappingURL=recipes.resolver.js.map