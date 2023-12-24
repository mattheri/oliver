"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RANDOM_RECIPE_DEFAULT_AMOUNT = exports.EXTERNAL_RECIPE_QUERY_PARAMS = exports.EXTERNAL_RECIPE_ENDPOINTS = exports.EXTERNAL_RECIPE_API_URL = void 0;
exports.EXTERNAL_RECIPE_API_URL = 'https://www.themealdb.com/api/json/v1/1';
exports.EXTERNAL_RECIPE_ENDPOINTS = {
    SEARCH: 'search.php',
    RANDOM: 'random.php',
    CATEGORIES: 'categories.php',
    LIST: 'list.php',
    FILTER: 'filter.php',
    LOOKUP: 'lookup.php',
    PREVIEW_IMAGE: 'preview',
};
exports.EXTERNAL_RECIPE_QUERY_PARAMS = {
    SEARCH_BY_NAME: 's',
    SEARCH_BY_FIRST_LETTER: 'f',
    SEARCH_BY_ID: 'i',
    SEARCH_BY_CATEGORY: 'c',
    SEARCH_BY_AREA: 'a',
    FILTER_BY_INGREDIENT: 'i',
    FILTER_BY_CATEGORY: 'c',
    FILTER_BY_AREA: 'a',
};
exports.RANDOM_RECIPE_DEFAULT_AMOUNT = 10;
//# sourceMappingURL=recipes.constants.js.map