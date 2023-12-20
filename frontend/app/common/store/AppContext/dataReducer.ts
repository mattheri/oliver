import type { DataState } from "~/common";
import type { Recipe } from "~/recipes/types";

export const Action = {
  UPDATE_RECIPES: "UPDATE_RECIPES",
  UPDATE_RECIPE: "UPDATE_RECIPE",
} as const;

export type ActionPayload =
  | { type: typeof Action.UPDATE_RECIPES; payload: { recipes: Recipe[] } }
  | { type: typeof Action.UPDATE_RECIPE; payload: { recipe: Recipe } };

export default function dataReducer(state: DataState, action: ActionPayload) {
  switch (action.type) {
    case Action.UPDATE_RECIPES:
      return {
        ...state,
        recipes: action.payload.recipes,
      };
    case Action.UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) => {
          if (recipe.id === action.payload.recipe.id) {
            return action.payload.recipe;
          }
          return recipe;
        }),
      };
    default:
      throw new Error("Invalid action type");
  }
}
