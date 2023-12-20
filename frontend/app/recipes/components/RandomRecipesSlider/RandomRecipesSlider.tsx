import type { Recipe } from "~/recipes/types";

import { useState, useEffect } from "react";
import { HttpState, useClientLoader } from "~/http";

import Slider from "~/common/components/Slider/Slider";
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
  }, []);

  return (
    <HttpState loading={loading}>
      <Slider slidesToShow={2} className="py-2">
        {randomRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </Slider>
    </HttpState>
  );
}
