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
exports.ImageResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const image_model_1 = require("../models/image.model");
const image_dto_1 = require("../dto/image.dto");
const image_service_1 = require("../services/image.service");
const image_size_model_1 = require("../models/image-size.model");
const image_size_dto_1 = require("../dto/image-size.dto");
let ImageResolver = class ImageResolver {
    constructor(imageService) {
        this.imageService = imageService;
    }
    async imageMetadata(input) {
        return this.imageService.getImageMetadata(input);
    }
    async imageSizes(_a) {
        var { sizes } = _a, image = __rest(_a, ["sizes"]);
        return this.imageService.createImageSizes(image, sizes);
    }
    async sizes(image) {
        return this.imageService.createImageSizes(image);
    }
};
__decorate([
    (0, graphql_1.Query)(() => image_model_1.Image),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [image_dto_1.ImageDto]),
    __metadata("design:returntype", Promise)
], ImageResolver.prototype, "imageMetadata", null);
__decorate([
    (0, graphql_1.Query)(() => [image_size_model_1.ImageSize]),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [image_size_dto_1.ImageSizeDto]),
    __metadata("design:returntype", Promise)
], ImageResolver.prototype, "imageSizes", null);
__decorate([
    (0, graphql_1.ResolveField)(() => image_size_model_1.ImageSize),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [image_model_1.Image]),
    __metadata("design:returntype", Promise)
], ImageResolver.prototype, "sizes", null);
ImageResolver = __decorate([
    (0, graphql_1.Resolver)(() => image_model_1.Image),
    __metadata("design:paramtypes", [image_service_1.ImageService])
], ImageResolver);
exports.ImageResolver = ImageResolver;
//# sourceMappingURL=image.resolver.js.map