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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const auth_interfaces_1 = require("../../auth/interfaces/auth.interfaces");
const authorization_service_1 = require("../../auth/services/authorization.service");
const db_service_1 = require("../../db/services/db.service");
const common_1 = require("@nestjs/common");
const recipes_constants_1 = require("../recipes.constants");
const external_recipe_service_1 = require("./external-recipe.service");
let RecipeService = class RecipeService {
    constructor(db, authorizationService, externalRecipeService) {
        this.db = db;
        this.authorizationService = authorizationService;
        this.externalRecipeService = externalRecipeService;
        this.randomRecipesDefaultAmount = recipes_constants_1.RANDOM_RECIPE_DEFAULT_AMOUNT;
    }
    async getRecipesByUserId(userId) {
        return this.db.recipe.findMany({ where: { ownerId: userId } });
    }
    async getRecipesByUserEmail(email, includeOwner = false) {
        const recipes = await this.db.recipe.findMany({
            where: {
                OR: [
                    { owner: { email } },
                    { allowView: { contains: email } },
                    { allowEdit: { contains: email } },
                    { allowDelete: { contains: email } },
                ],
            },
            include: { owner: includeOwner },
        });
        return [...new Set(recipes)];
    }
    async getRecipeById(id, includeOwner = false) {
        return this.db.recipe.findUnique({
            where: { id },
            include: { owner: includeOwner },
        });
    }
    async createRecipe(data) {
        const { userId } = data, _a = data.image, { id, src } = _a, image = __rest(_a, ["id", "src"]), recipe = __rest(data, ["userId", "image"]);
        return this.db.recipe.create({
            data: Object.assign(Object.assign({}, recipe), { owner: { connect: { id: userId } }, image: {
                    connectOrCreate: {
                        where: { id },
                        create: Object.assign({ url: src }, image),
                    },
                } }),
            select: {
                id: true,
                title: true,
                ingredients: true,
                instructions: true,
                ownerId: true,
                image: true,
                isExternalSrc: true,
                allowDelete: true,
                allowEdit: true,
                allowView: true,
            },
        });
    }
    async updateRecipe(data) {
        const _a = data.image, { id: imageId, src } = _a, image = __rest(_a, ["id", "src"]), recipe = __rest(data, ["image"]);
        return this.db.recipe.update({
            where: { id: recipe.id },
            data: Object.assign(Object.assign({}, recipe), { image: {
                    connectOrCreate: {
                        where: { id: imageId },
                        create: Object.assign({ url: src }, image),
                    },
                } }),
            select: {
                id: true,
                title: true,
                ingredients: true,
                instructions: true,
                ownerId: true,
                image: true,
                isExternalSrc: true,
                allowDelete: true,
                allowEdit: true,
                allowView: true,
            },
        });
    }
    async addAllowView({ id, email }, user) {
        var _a, _b, _c, _d;
        const recipe = await this.getRecipeById(id, true);
        const allowEditEmails = (_b = (_a = recipe.allowEdit) === null || _a === void 0 ? void 0 : _a.split(',')) !== null && _b !== void 0 ? _b : [];
        const allowViewEmails = (_d = (_c = recipe.allowView) === null || _c === void 0 ? void 0 : _c.split(',')) !== null && _d !== void 0 ? _d : [];
        if (!this.authorizationService.canI({
            email: user.email,
            allowView: allowEditEmails,
            level: auth_interfaces_1.AuthorizationLevel.Edit,
            ownerEmail: recipe.owner.email,
        })) {
            throw new common_1.UnauthorizedException();
        }
        return this.db.recipe.update({
            where: { id },
            data: {
                allowView: this.authorizationService
                    .addEmailToAllowList({
                    list: allowViewEmails,
                    email,
                })
                    .join(','),
            },
            select: {
                id: true,
                title: true,
                ingredients: true,
                instructions: true,
                ownerId: true,
                image: true,
                isExternalSrc: true,
                allowDelete: true,
                allowEdit: true,
                allowView: true,
            },
        });
    }
    async addAllowEdit({ id, email }, user) {
        var _a, _b;
        const recipe = await this.getRecipeById(id, true);
        const allowEditEmails = (_b = (_a = recipe.allowEdit) === null || _a === void 0 ? void 0 : _a.split(',')) !== null && _b !== void 0 ? _b : [];
        if (!this.authorizationService.canI({
            email: user.email,
            allowView: allowEditEmails,
            level: auth_interfaces_1.AuthorizationLevel.Edit,
            ownerEmail: recipe.owner.email,
        })) {
            throw new common_1.UnauthorizedException();
        }
        return this.db.recipe.update({
            where: { id },
            data: {
                allowEdit: this.authorizationService
                    .addEmailToAllowList({
                    list: allowEditEmails,
                    email,
                })
                    .join(','),
            },
            select: {
                id: true,
                title: true,
                ingredients: true,
                instructions: true,
                ownerId: true,
                image: true,
                isExternalSrc: true,
                allowDelete: true,
                allowEdit: true,
                allowView: true,
            },
        });
    }
    async addAllowDelete({ id, email }, user) {
        var _a, _b, _c, _d;
        const recipe = await this.getRecipeById(id);
        const allowEditEmails = (_b = (_a = recipe.allowEdit) === null || _a === void 0 ? void 0 : _a.split(',')) !== null && _b !== void 0 ? _b : [];
        const allowDeleteEmails = (_d = (_c = recipe.allowDelete) === null || _c === void 0 ? void 0 : _c.split(',')) !== null && _d !== void 0 ? _d : [];
        if (!this.authorizationService.canI({
            email: user.email,
            allowEdit: allowEditEmails,
            level: auth_interfaces_1.AuthorizationLevel.Edit,
            ownerEmail: recipe.owner.email,
        })) {
            throw new common_1.UnauthorizedException();
        }
        return this.db.recipe.update({
            where: { id },
            data: {
                allowDelete: this.authorizationService
                    .addEmailToAllowList({
                    list: allowDeleteEmails,
                    email,
                })
                    .join(','),
            },
            select: {
                id: true,
                title: true,
                ingredients: true,
                instructions: true,
                ownerId: true,
                image: true,
                isExternalSrc: true,
                allowDelete: true,
                allowEdit: true,
                allowView: true,
            },
        });
    }
    async removeAllowView({ id, email }, user) {
        var _a, _b, _c, _d;
        const recipe = await this.getRecipeById(id);
        const allowEditEmails = (_b = (_a = recipe.allowEdit) === null || _a === void 0 ? void 0 : _a.split(',')) !== null && _b !== void 0 ? _b : [];
        const allowViewEmails = (_d = (_c = recipe.allowView) === null || _c === void 0 ? void 0 : _c.split(',')) !== null && _d !== void 0 ? _d : [];
        if (!this.authorizationService.canI({
            email: user.email,
            allowEdit: allowEditEmails,
            level: auth_interfaces_1.AuthorizationLevel.Edit,
            ownerEmail: recipe.owner.email,
        })) {
            throw new common_1.UnauthorizedException();
        }
        return this.db.recipe.update({
            where: { id },
            data: {
                allowView: this.authorizationService
                    .removeEmailFromAllowList({
                    list: allowViewEmails,
                    email,
                })
                    .join(','),
            },
            select: {
                id: true,
                title: true,
                ingredients: true,
                instructions: true,
                ownerId: true,
                image: true,
                isExternalSrc: true,
                allowDelete: true,
                allowEdit: true,
                allowView: true,
            },
        });
    }
    async removeAllowEdit({ id, email }, user) {
        var _a, _b;
        const recipe = await this.getRecipeById(id);
        const allowEditEmails = (_b = (_a = recipe.allowEdit) === null || _a === void 0 ? void 0 : _a.split(',')) !== null && _b !== void 0 ? _b : [];
        if (!this.authorizationService.canI({
            email: user.email,
            allowEdit: allowEditEmails,
            level: auth_interfaces_1.AuthorizationLevel.Edit,
            ownerEmail: recipe.owner.email,
        })) {
            throw new common_1.UnauthorizedException();
        }
        return this.db.recipe.update({
            where: { id },
            data: {
                allowEdit: this.authorizationService
                    .removeEmailFromAllowList({
                    list: allowEditEmails,
                    email,
                })
                    .join(','),
            },
            select: {
                id: true,
                title: true,
                ingredients: true,
                instructions: true,
                ownerId: true,
                image: true,
                isExternalSrc: true,
                allowDelete: true,
                allowEdit: true,
                allowView: true,
            },
        });
    }
    async removeAllowDelete({ id, email }, user) {
        var _a, _b, _c, _d;
        const recipe = await this.getRecipeById(id);
        const allowEditEmails = (_b = (_a = recipe.allowEdit) === null || _a === void 0 ? void 0 : _a.split(',')) !== null && _b !== void 0 ? _b : [];
        const allowDeleteEmails = (_d = (_c = recipe.allowDelete) === null || _c === void 0 ? void 0 : _c.split(',')) !== null && _d !== void 0 ? _d : [];
        if (!this.authorizationService.canI({
            email: user.email,
            allowEdit: allowEditEmails,
            level: auth_interfaces_1.AuthorizationLevel.Edit,
            ownerEmail: recipe.owner.email,
        })) {
            throw new common_1.UnauthorizedException();
        }
        return this.db.recipe.update({
            where: { id },
            data: {
                allowDelete: this.authorizationService
                    .removeEmailFromAllowList({
                    list: allowDeleteEmails,
                    email,
                })
                    .join(','),
            },
            select: {
                id: true,
                title: true,
                ingredients: true,
                instructions: true,
                ownerId: true,
                image: true,
                isExternalSrc: true,
                allowDelete: true,
                allowEdit: true,
                allowView: true,
            },
        });
    }
    async deleteRecipe({ id }) {
        return this.db.recipe.delete({ where: { id } });
    }
    async deleteManyRecipes({ ids }) {
        return Promise.all(ids.map((id) => this.db.recipe.delete({ where: { id } })));
    }
    async getRandomRecipes({ amount = this.randomRecipesDefaultAmount, }) {
        return this.externalRecipeService.getMultipeRandomRecipes(amount);
    }
};
RecipeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DatabaseService,
        authorization_service_1.AuthorizationService,
        external_recipe_service_1.ExternalRecipeService])
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipes.service.js.map