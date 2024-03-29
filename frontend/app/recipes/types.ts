import type { Nullable } from "~/types";
import { RECIPE_API_ERROR_CODES } from "./constants";

export type Recipe = {
  id: string;
  title: string;
  url?: Nullable<string>;
  ingredients: Nullable<string[]>;
  instructions: Nullable<string[]>;
  userId: string;
  image?: Nullable<{
    width?: number;
    height?: number;
    src: string;
    sizes?: {
      width?: number;
      height?: number;
      src: string;
    }[];
  }>;
  isExternalSrc?: boolean;
  servings?: Nullable<string>;
  prepTime?: Nullable<string>;
  cookTime?: Nullable<string>;
  mainIngredient?: Nullable<string>;
  isWishList?: boolean;
  allowView: string[];
  allowEdit: string[];
  allowDelete: string[];
};

export type CreateRecipeDto = Omit<Recipe, "id" | "userId">;
export type UpdateRecipeDto = Partial<CreateRecipeDto>;

export type RecipeCategory = {
  name: string;
  url: string;
  image: Nullable<string>;
};

export type MealDBRecipe = {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: Nullable<string>;
  strCategory: Nullable<string>;
  strArea: Nullable<string>;
  strInstructions: Nullable<string>;
  strMealThumb: Nullable<string>;
  strTags: Nullable<string>;
  strYoutube: Nullable<string>;
  strIngredient1: Nullable<string>;
  strIngredient2: Nullable<string>;
  strIngredient3: Nullable<string>;
  strIngredient4: Nullable<string>;
  strIngredient5: Nullable<string>;
  strIngredient6: Nullable<string>;
  strIngredient7: Nullable<string>;
  strIngredient8: Nullable<string>;
  strIngredient9: Nullable<string>;
  strIngredient10: Nullable<string>;
  strIngredient11: Nullable<string>;
  strIngredient12: Nullable<string>;
  strIngredient13: Nullable<string>;
  strIngredient14: Nullable<string>;
  strIngredient15: Nullable<string>;
  strIngredient16: Nullable<string>;
  strIngredient17: Nullable<string>;
  strIngredient18: Nullable<string>;
  strIngredient19: Nullable<string>;
  strIngredient20: Nullable<string>;
  strMeasure1: Nullable<string>;
  strMeasure2: Nullable<string>;
  strMeasure3: Nullable<string>;
  strMeasure4: Nullable<string>;
  strMeasure5: Nullable<string>;
  strMeasure6: Nullable<string>;
  strMeasure7: Nullable<string>;
  strMeasure8: Nullable<string>;
  strMeasure9: Nullable<string>;
  strMeasure10: Nullable<string>;
  strMeasure11: Nullable<string>;
  strMeasure12: Nullable<string>;
  strMeasure13: Nullable<string>;
  strMeasure14: Nullable<string>;
  strMeasure15: Nullable<string>;
  strMeasure16: Nullable<string>;
  strMeasure17: Nullable<string>;
  strMeasure18: Nullable<string>;
  strMeasure19: Nullable<string>;
  strMeasure20: Nullable<string>;
  strSource: Nullable<string>;
  strImageSource: Nullable<string>;
  strCreativeCommonsConfirmed: Nullable<string>;
  dateModified: Nullable<string>;
};

export type MealDBRecipeResponse = {
  meals: MealDBRecipe[];
};

export type MealDbCategory = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type MealDbCategoryResponse = {
  categories: MealDbCategory[];
};

export type CreateRecipeFromExternalSrcResponse =
  | {
      id: string;
    }
  | {
      code: (typeof RECIPE_API_ERROR_CODES)[keyof typeof RECIPE_API_ERROR_CODES];
    };

export type RecipeByUserQueryResponse = {
  recipesByUser: Recipe[];
};
