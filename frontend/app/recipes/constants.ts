export const MEAL_DB_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const MEAL_DB_ENDPOINTS = {
  SEARCH: "search.php",
  RANDOM: "random.php",
  CATEGORIES: "categories.php",
  LIST: "list.php",
  FILTER: "filter.php",
  LOOKUP: "lookup.php",
  PREVIEW_IMAGE: "preview",
} as const;

export const MEAL_DB_QUERY_PARAMS = {
  SEARCH_BY_NAME: "s",
  SEARCH_BY_FIRST_LETTER: "f",
  SEARCH_BY_ID: "i",
  SEARCH_BY_CATEGORY: "c",
  SEARCH_BY_AREA: "a",
  FILTER_BY_INGREDIENT: "i",
  FILTER_BY_CATEGORY: "c",
  FILTER_BY_AREA: "a",
} as const;

export const RECIPE_EXTERNAL_QUERY_PARAMS = {
  IS_EXTERNAL_SRC: "isExternalSrc",
} as const;
