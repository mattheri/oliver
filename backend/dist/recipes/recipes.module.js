"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesModule = void 0;
const authorization_service_1 = require("../auth/services/authorization.service");
const db_service_1 = require("../db/services/db.service");
const image_module_1 = require("../image/image.module");
const users_module_1 = require("../users/users.module");
const common_1 = require("@nestjs/common");
const external_recipe_presenter_1 = require("./presenters/external-recipe.presenter");
const recipes_resolver_1 = require("./resolvers/recipes.resolver");
const external_recipe_service_1 = require("./services/external-recipe.service");
const recipes_service_1 = require("./services/recipes.service");
let RecipesModule = class RecipesModule {
};
RecipesModule = __decorate([
    (0, common_1.Module)({
        providers: [
            db_service_1.DatabaseService,
            recipes_service_1.RecipeService,
            authorization_service_1.AuthorizationService,
            recipes_resolver_1.RecipesResolver,
            external_recipe_service_1.ExternalRecipeService,
            external_recipe_presenter_1.ExternalRecipePresenter,
        ],
        imports: [users_module_1.UsersModule, image_module_1.ImageModule],
    })
], RecipesModule);
exports.RecipesModule = RecipesModule;
//# sourceMappingURL=recipes.module.js.map