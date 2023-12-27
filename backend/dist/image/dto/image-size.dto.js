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
exports.ImageSizeDto = void 0;
const class_validator_1 = require("class-validator");
const graphql_1 = require("@nestjs/graphql");
let ImageSizeDto = class ImageSizeDto {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateIf)((o) => o.width !== undefined),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ImageSizeDto.prototype, "width", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateIf)((o) => o.height !== undefined),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ImageSizeDto.prototype, "height", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImageSizeDto.prototype, "src", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.Int], { nullable: true, defaultValue: [300, 600, 900] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateIf)((o) => o.sizes !== undefined),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], ImageSizeDto.prototype, "sizes", void 0);
ImageSizeDto = __decorate([
    (0, graphql_1.InputType)()
], ImageSizeDto);
exports.ImageSizeDto = ImageSizeDto;
//# sourceMappingURL=image-size.dto.js.map