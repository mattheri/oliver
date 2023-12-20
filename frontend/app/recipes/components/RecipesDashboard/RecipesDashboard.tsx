import { If } from "~/common";

import EmptyRecipesDashboard from "../EmptyRecipesDashboard/EmptyRecipesDashboard";

import useRecipes from "~/recipes/hook/useRecipes";

export default function RecipesDashboard() {
  const recipes = useRecipes();

  return (
    <section>
      <If condition={recipes.length === 0}>
        <If.Then>
          <EmptyRecipesDashboard />
        </If.Then>
        <If.Else>
          <div></div>
        </If.Else>
      </If>
    </section>
  );
}
