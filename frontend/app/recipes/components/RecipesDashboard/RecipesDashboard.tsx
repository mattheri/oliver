import { If } from "~/common";

import EmptyRecipesDashboard from "../EmptyRecipesDashboard/EmptyRecipesDashboard";

import useRecipes from "~/recipes/hook/useRecipes";
import Slider from "~/common/components/Slider/Slider";
import RecipeCard from "../RecipeCard/RecipeCard";

export default function RecipesDashboard() {
  const recipes = useRecipes();

  return (
    <section>
      <If condition={recipes.length === 0}>
        <If.Then>
          <EmptyRecipesDashboard />
        </If.Then>
        <If.Else>
          <div>
            <Slider>
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  ingredients={recipe.ingredients}
                  isExternalSrc={recipe.isExternalSrc}
                  title={recipe.title}
                  image={recipe.image}
                />
              ))}
            </Slider>
          </div>
        </If.Else>
      </If>
    </section>
  );
}
