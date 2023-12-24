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
exports.SignUpDto = void 0;
const class_validator_1 = require("class-validator");
const create_user_dto_1 = require("../../users/dto/create-user.dto");
const graphql_1 = require("@nestjs/graphql");
const match_decorator_1 = require("../decorators/match.decorator");
const login_dto_1 = require("./login.dto");
let SignUpDto = class SignUpDto extends (0, graphql_1.IntersectionType)(login_dto_1.LoginDto, (0, graphql_1.PartialType)((0, graphql_1.OmitType)(create_user_dto_1.CreateUserDto, ['email']))) {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, match_decorator_1.Match)('password', { message: 'Passwords do not match' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "passwordCheck", void 0);
SignUpDto = __decorate([
    (0, graphql_1.InputType)()
], SignUpDto);
exports.SignUpDto = SignUpDto;
//# sourceMappingURL=sign-up.dto.js.map