"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsProvider = void 0;
const class_validator_1 = require("class-validator");
const users_constants_1 = require("../users.constants");
function IsProvider(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isProvider',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    const regex = new RegExp(`^${Object.values(users_constants_1.Provider)
                        .filter((v) => typeof v === 'string')
                        .join('|')}$`, 'i');
                    return regex.test(value);
                },
            },
        });
    };
}
exports.IsProvider = IsProvider;
//# sourceMappingURL=is-provider.decorator.js.map