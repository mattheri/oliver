import type { LoaderArgs } from "@remix-run/node";
import mealdbService from "~/recipes/service/mealdb.service";

const DEFAULT_RANDOM_RECIPES_COUNT = 10;

export async function loader({ params }: LoaderArgs) {
  const count = Number(params.count) ?? 10;

  const randomRecipes = await mealdbService.getMultipeRandomRecipes(count);

  return {
    randomRecipes,
  };
}
