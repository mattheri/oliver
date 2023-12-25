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
exports.CreateRecipeDto = exports.CreateRecipeWithUserIdDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const graphql_1 = require("@nestjs/graphql");
const create_recipe_image_dto_1 = require("./create-recipe-image.dto");
let CreateRecipeWithUserIdDto = class CreateRecipeWithUserIdDto {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRecipeWithUserIdDto.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true, defaultValue: [] }),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (Array.isArray(value)) {
            return value.map((v) => v.trim()).join(',');
        }
        return value;
    }),
    __metadata("design:type", String)
], CreateRecipeWithUserIdDto.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true, defaultValue: [] }),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (Array.isArray(value)) {
            return value.map((v) => v.trim()).join(',');
        }
        return value;
    }),
    __metadata("design:type", String)
], CreateRecipeWithUserIdDto.prototype, "instructions", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRecipeWithUserIdDto.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => create_recipe_image_dto_1.CreateRecipeImageDto, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", create_recipe_image_dto_1.CreateRecipeImageDto)
], CreateRecipeWithUserIdDto.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateRecipeWithUserIdDto.prototype, "isExternalSrc", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRecipeWithUserIdDto.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true, defaultValue: [] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { each: true }),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (Array.isArray(value)) {
            return value.map((v) => v.trim()).join(',');
        }
        return value;
    }),
    __metadata("design:type", String)
], CreateRecipeWithUserIdDto.prototype, "allowView", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true, defaultValue: [] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { each: true }),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (Array.isArray(value)) {
            return value.map((v) => v.trim()).join(',');
        }
        return value;
    }),
    __metadata("design:type", String)
], CreateRecipeWithUserIdDto.prototype, "allowEdit", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true, defaultValue: [] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { each: true }),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (Array.isArray(value)) {
            return value.map((v) => v.trim()).join(',');
        }
        return value;
    }),
    __metadata("design:type", String)
], CreateRecipeWithUserIdDto.prototype, "allowDelete", void 0);
CreateRecipeWithUserIdDto = __decorate([
    (0, graphql_1.InputType)()
], CreateRecipeWithUserIdDto);
exports.CreateRecipeWithUserIdDto = CreateRecipeWithUserIdDto;
let CreateRecipeDto = class CreateRecipeDto extends (0, graphql_1.OmitType)(CreateRecipeWithUserIdDto, [
    'userId',
]) {
};
CreateRecipeDto = __decorate([
    (0, graphql_1.InputType)()
], CreateRecipeDto);
exports.CreateRecipeDto = CreateRecipeDto;
//# sourceMappingURL=create-recipe.dto.js.map