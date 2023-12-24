"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const graphql_1 = require("@nestjs/graphql");
var Provider;
(function (Provider) {
    Provider["LOCAL"] = "LOCAL";
    Provider["FACEBOOK"] = "FACEBOOK";
    Provider["GOOGLE"] = "GOOGLE";
})(Provider = exports.Provider || (exports.Provider = {}));
(0, graphql_1.registerEnumType)(Provider, {
    name: 'Provider',
});
//# sourceMappingURL=provider.model.js.map