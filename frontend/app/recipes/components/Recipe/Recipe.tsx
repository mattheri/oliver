import type { Recipe } from "~/recipes/types";

import { If } from "~/common";
import RecipeHeader from "./RecipeHeader";
import RecipeHeaderSection from "./RecipeHeaderSection";

type Props = Partial<Recipe>;

export default function Recipe({
  title,
  ingredients,
  instructions,
  image,
  url,
}: Props) {
  return (
    <section className="flex w-full flex-col">
      <RecipeHeader title={title} url={url ?? " "} canEdit />
      <RecipeHeaderSection image={image} title={title} />
        <If condition={!!ingredients}>
          <If.Then>
            <div className="w-full lg:w-1/2">
              <h2 className="text-xl font-bold">Ingredients</h2>
              <ul className="list-inside list-disc">
                {ingredients?.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </If.Then>
        </If>
      <If condition={!!instructions}>
        <If.Then>
          <h2 className="text-xl font-bold">Instructions</h2>
          <ol className="list-inside list-decimal">
            {instructions?.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </If.Then>
      </If>
      <If condition={!!url}>
        <If.Then>
          Original source:{" "}
          <a href={url!} target="_blank" rel="noreferrer">
            {url}
          </a>
        </If.Then>
      </If>
    </section>
  );
}
