import { useContext } from "react";

import { AppContext } from "~/common";

export default function useRecipes() {
  const {
    data: {
      state: { recipes },
    },
  } = useContext(AppContext);

  return recipes;
}
