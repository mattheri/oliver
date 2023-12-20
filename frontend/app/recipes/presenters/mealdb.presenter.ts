import type { Nullable } from "~/types";
import type {
  MealDBRecipe,
  MealDbCategory,
  Recipe,
  RecipeCategory,
} from "../types";

export default class MealDBPresenter {
  mealDbToRecipe(meal: MealDBRecipe, userId: number): Recipe {
    const image: Recipe["image"] = meal.strMealThumb
      ? {
          src: meal.strMealThumb,
        }
      : null;

    const url = meal.strSource ? meal.strSource : null;

    return {
      id: Number(meal.idMeal),
      title: meal.strMeal,
      instructions: this.formatInstructions(meal.strInstructions),
      user_id: userId,
      ingredients: this.filterIngredients(meal),
      image,
      url,
      isExternalSrc: true,
    };
  }

  mealDbCategoryToRecipeCategory(
    mealDbCategory: MealDbCategory,
  ): RecipeCategory {
    return {
      name: mealDbCategory.strCategory,
      url: `/recipes/categories/${mealDbCategory.strCategory.toLowerCase()}`,
      image: mealDbCategory.strCategoryThumb,
    };
  }

  private filterIngredients(meal: MealDBRecipe) {
    const ingredients = Object.entries(meal).filter(([key, value]) => {
      return key.includes("Ingredient") && value;
    });

    const measures = Object.entries(meal).filter(([key, value]) => {
      return key.includes("Measure") && value;
    });

    return ingredients.map(([key, value], index) => {
      const measure = measures[index][1];
      return `${value} ${measure}`;
    });
  }

  private formatInstructions(instructions: Nullable<string>) {
    if (!instructions) {
      return [];
    }

    return instructions
      .split("\n")
      .filter((instruction) => instruction)
      .map((instruction) => instruction.trim());
  }
}
