import { useEffect, useState } from "react";
import { THEME } from "~/common";
import Slider from "~/common/components/Slider/Slider";
import { HttpState, useClientLoader } from "~/http";
import type { Recipe } from "~/recipes/types";

import RecipeCard from "../RecipeCard/RecipeCard";

type Props = {
  numberOfRecipes?: number;
};

const DEFAULT_NUMBER_OF_RECIPES = 10;

export default function RandomRecipesSlider({
  numberOfRecipes = DEFAULT_NUMBER_OF_RECIPES,
}: Props) {
  const { loader, loading } = useClientLoader();
  const [randomRecipes, setRandomRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    loader<{ randomRecipes: Recipe[] }>({
      route: `/api/recipes/random/${numberOfRecipes}`,
    }).then((response) => {
      if (!response) return;
      setRandomRecipes(response.randomRecipes);
    });
  }, [loader, numberOfRecipes]);

  return (
    <HttpState loading={loading}>
      <Slider slidesToShow={2} responsive={[{ breakpoint: THEME.BREAKPOINTS.LG, settings: { slidesToShow: 1} }]} className="py-2 isolate">
        {randomRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </Slider>
    </HttpState>
  );
}
