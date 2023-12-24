"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxCategory = void 0;
const graphql_1 = require("@nestjs/graphql");
var BoxCategory;
(function (BoxCategory) {
    BoxCategory["FREEZER"] = "FREEZER";
    BoxCategory["REFRIGERATOR"] = "REFRIGERATOR";
    BoxCategory["PANTRY"] = "PANTRY";
    BoxCategory["OTHER"] = "OTHER";
})(BoxCategory = exports.BoxCategory || (exports.BoxCategory = {}));
(0, graphql_1.registerEnumType)(BoxCategory, {
    name: 'BoxCategory',
});
//# sourceMappingURL=container-category.model.js.map