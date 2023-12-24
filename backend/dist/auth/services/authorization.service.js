"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationService = void 0;
const common_1 = require("@nestjs/common");
const auth_interfaces_1 = require("../interfaces/auth.interfaces");
let AuthorizationService = class AuthorizationService {
    canI({ email, allowDelete, allowEdit, allowView, level = auth_interfaces_1.AuthorizationLevel.View, ownerEmail, }) {
        if (email === ownerEmail)
            return true;
        switch (level) {
            case auth_interfaces_1.AuthorizationLevel.View:
                return this.canIView({ email, allowView });
            case auth_interfaces_1.AuthorizationLevel.Edit:
                return this.canIEdit({ email, allowEdit });
            case auth_interfaces_1.AuthorizationLevel.Delete:
                return this.canIDelete({ email, allowDelete });
            default:
                return false;
        }
    }
    addEmailToAllowList({ list, email }) {
        if (!list) {
            return [email];
        }
        return [...new Set([...list, email])];
    }
    removeEmailFromAllowList({ list, email }) {
        if (!list) {
            return [];
        }
        return [...new Set(list.filter((listEmail) => listEmail !== email))];
    }
    canIView({ email, allowView, }) {
        if (!allowView) {
            return false;
        }
        return allowView.includes(email);
    }
    canIEdit({ email, allowEdit, }) {
        if (!allowEdit) {
            return false;
        }
        return allowEdit.includes(email);
    }
    canIDelete({ email, allowDelete, }) {
        if (!allowDelete) {
            return false;
        }
        return allowDelete.includes(email);
    }
};
AuthorizationService = __decorate([
    (0, common_1.Injectable)()
], AuthorizationService);
exports.AuthorizationService = AuthorizationService;
//# sourceMappingURL=authorization.service.js.map