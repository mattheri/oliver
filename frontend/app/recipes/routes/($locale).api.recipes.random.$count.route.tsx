import mealdbService from "~/recipes/service/mealdb.service";

import type { LoaderArgs } from "@remix-run/node";

const DEFAULT_RANDOM_RECIPES_COUNT = 10;

export async function loader({ params }: LoaderArgs) {
  const count = Number(params.count) ?? DEFAULT_RANDOM_RECIPES_COUNT;

  const randomRecipes = await mealdbService.getMultipeRandomRecipes(count);

  return {
    randomRecipes,
  };
}
