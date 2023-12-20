import type { Recipe } from "../types";

import { useContext, useCallback } from "react";

import { AppContext, DataAction } from "~/common";

export default function useUpdateSingleRecipe() {
  const {
    data: { dispatch },
  } = useContext(AppContext);

  return useCallback(
    (recipe: Recipe) => {
      dispatch({ type: DataAction.UPDATE_RECIPE, payload: { recipe } });
    },
    [dispatch],
  );
}
