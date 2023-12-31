import { If, Link } from "~/common";
import useRecipeUrl from "~/recipes/hook/useRecipeUrl";
import type { Recipe } from "~/recipes/types";

type Props = {
  id: Recipe["id"];
  title: Recipe["title"];
  image?: Recipe["image"];
  isExternalSrc: Recipe["isExternalSrc"];
  ingredients: Recipe["ingredients"];
}

export default function RecipeCard({
  id,
  title,
  image,
  isExternalSrc = false,
  ingredients,
}: Props) {
  const to = useRecipeUrl({
    id,
    isExternalSrc,
  });

  return (
    <Link to={to} className="block max-h-24 overflow-hidden">
      <div className="flex">
        <If condition={!!image}>
          <If.Then>
            <img
              className="h-24 w-24 rounded-md"
              src={image?.src}
              alt={title}
            />
          </If.Then>
        </If>
        <div className="max-h-full flex-grow p-2">
          <div className="pb-2 text-left text-sm">{title}</div>
          <p className="line-clamp-2 text-sm">{ingredients?.join(", ")}</p>
        </div>
      </div>
    </Link>
  );
}
