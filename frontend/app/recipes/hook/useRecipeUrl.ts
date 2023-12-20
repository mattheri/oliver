import { RECIPE_EXTERNAL_QUERY_PARAMS } from "../constants";
import type { Recipe } from "../types";

export default function useRecipeUrl({
  id,
  ingredients,
  instructions,
  title,
  user_id,
  image,
  isExternalSrc,
  url,
}: Recipe) {
  const recipeUrl = new URL(`${window.location.origin}/recipes/${id}`);

  if (isExternalSrc) {
    recipeUrl.pathname = "/recipes/external";
    recipeUrl.searchParams.set(RECIPE_EXTERNAL_QUERY_PARAMS.TITLE, title);
    recipeUrl.searchParams.set(
      RECIPE_EXTERNAL_QUERY_PARAMS.USER_ID,
      user_id.toString(),
    );
    if (image) {
      recipeUrl.searchParams.set(
        RECIPE_EXTERNAL_QUERY_PARAMS.IMAGE,
        image?.src,
      );
    }
    if (url) {
      recipeUrl.searchParams.set(RECIPE_EXTERNAL_QUERY_PARAMS.URL, url);
    }
    if (instructions) {
      recipeUrl.searchParams.set(
        RECIPE_EXTERNAL_QUERY_PARAMS.INSTRUCTIONS,
        instructions?.join(","),
      );
    }
    if (ingredients) {
      recipeUrl.searchParams.set(
        RECIPE_EXTERNAL_QUERY_PARAMS.INGREDIENTS,
        ingredients?.join(","),
      );
    }

    return recipeUrl.toString();
  }

  return recipeUrl.toString();
}
