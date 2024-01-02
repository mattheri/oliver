import { RECIPE_EXTERNAL_QUERY_PARAMS } from "../constants";

type UseRecipeUrlArgs = {
  id: string;
  isExternalSrc: boolean;
}

export default function useRecipeUrl({
  id,
  isExternalSrc,
}: UseRecipeUrlArgs) {
  const recipeUrl = new URL(`${window.location.origin}/recipes/${id}`);

  if (isExternalSrc) {
    recipeUrl.searchParams.set(RECIPE_EXTERNAL_QUERY_PARAMS.IS_EXTERNAL_SRC, "true");
  }

  return recipeUrl.toString().replace(window.location.origin, "");
}
