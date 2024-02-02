import WishlistButton from "~/common/components/WishlistButton/WishlistButton";
import type {
  CreateRecipeFromExternalSrcResponse,
  Recipe,
} from "~/recipes/types";

import { useActionData, useFetcher, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useToast } from "~/common";

type Props = {
  recipe: Recipe;
  createRecipe?: boolean;
};

export default function RecipeWishlistButton({
  recipe,
  createRecipe = false,
}: Props) {
  const navigate = useNavigate();
  const fetcher = useFetcher<CreateRecipeFromExternalSrcResponse>();
  const { toast } = useToast();

  const onClick = async () => {
    fetcher.submit(
      {
        recipe: JSON.stringify({
          ...recipe,
          isWishList: true,
          isExternalSrc: false,
        }),
      },
      {
        method: "POST",
        action: "/api/recipes/add-external-wishlist",
      },
    );
  };

  useEffect(() => {
    if (fetcher.data) {
      const data = fetcher.data;
      if ("id" in data) {
        navigate(`/recipes/${data.id}`);
      } else {
        toast(data.code, {
          autoClose: 5000,
          type: "error",
        });
      }
    }
  }, [fetcher]);

  return <WishlistButton isWishlist={recipe.isWishList} onClick={onClick} />;
}
