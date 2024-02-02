import useUrl from "~/http/hooks/useUrl";
import { RECIPE_EXTERNAL_QUERY_PARAMS } from "../constants";

type UseRecipeUrlArgs = {
  id: string;
  isExternalSrc: boolean;
};

export default function useRecipeUrl({ id, isExternalSrc }: UseRecipeUrlArgs) {
  const url = useUrl();
  const recipeUrl = new URL(`${url.origin}/recipes/${id}`);

  if (isExternalSrc) {
    recipeUrl.searchParams.set(
      RECIPE_EXTERNAL_QUERY_PARAMS.IS_EXTERNAL_SRC,
      "true",
    );
  }

  return recipeUrl.toString().replace(url.origin, "");
}
