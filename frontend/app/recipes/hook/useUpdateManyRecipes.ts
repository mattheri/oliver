import type { Recipe } from "../types";

import { useCallback, useContext } from "react";

import { AppContext, DataAction } from "~/common";

export default function useUpdateManyRecipes() {
  const {
    data: { dispatch },
  } = useContext(AppContext);

  return useCallback(
    (recipes: Recipe[]) => {
      dispatch({ type: DataAction.UPDATE_RECIPES, payload: { recipes } });
    },
    [dispatch],
  );
}
