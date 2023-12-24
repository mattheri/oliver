"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashService = void 0;
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
let HashService = class HashService {
    constructor() {
        this.hasher = bcrypt;
        this._saltOrRounds = Number(process.env.SALT_ROUNDS) || 10;
    }
    get saltOrRounds() {
        return this._saltOrRounds || 10;
    }
    set saltOrRounds(value) {
        this._saltOrRounds = value;
    }
    async hash(str) {
        return this.hasher.hash(str, this.saltOrRounds);
    }
    async compare(str, hash) {
        return this.hasher.compare(str, hash);
    }
};
HashService = __decorate([
    (0, common_1.Injectable)()
], HashService);
exports.HashService = HashService;
//# sourceMappingURL=hash.service.js.map