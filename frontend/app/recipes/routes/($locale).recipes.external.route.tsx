import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Recipe from "../components/Recipe/Recipe";
import { RECIPE_EXTERNAL_QUERY_PARAMS } from "../constants";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);

  const title = url.searchParams.get(RECIPE_EXTERNAL_QUERY_PARAMS.TITLE);
  const recipeUrl = url.searchParams.get(RECIPE_EXTERNAL_QUERY_PARAMS.URL);
  const image = url.searchParams.get(RECIPE_EXTERNAL_QUERY_PARAMS.IMAGE);
  const imageWidth = Number(url.searchParams.get(
    RECIPE_EXTERNAL_QUERY_PARAMS.IMAGE_WIDTH,
  ));
  const imageHeight = Number(url.searchParams.get(
    RECIPE_EXTERNAL_QUERY_PARAMS.IMAGE_HEIGHT,
  ));
  const ingredients = url.searchParams.get(
    RECIPE_EXTERNAL_QUERY_PARAMS.INGREDIENTS,
  );
  const instructions = url.searchParams.get(
    RECIPE_EXTERNAL_QUERY_PARAMS.INSTRUCTIONS,
  );
  const imageSrc = image ? { src: image, width: imageWidth, height: imageHeight } : undefined;

  return {
    title,
    url: recipeUrl,
    imageSrc,
    ingredients: ingredients?.split(",").map((ingredient) => ingredient.trim()),
    instructions: instructions
      ?.split(",")
      .map((instruction) => instruction.trim()),
  };
}

export default function Index() {
  const { title, url, imageSrc, ingredients, instructions } =
    useLoaderData<typeof loader>();

  return (
    <main className="flex flex-col py-12 section-container">
      <Recipe
        title={title ?? ""}
        url={url}
        image={imageSrc}
        ingredients={ingredients}
        instructions={instructions}
      />
    </main>
  );
}
