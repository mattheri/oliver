import WishlistButton from "~/common/components/WishlistButton/WishlistButton"
import { useClientLoader } from "~/http"
import recipesService from "~/recipes/service/recipes.service"
import type { Recipe } from "~/recipes/types"

import { useFetcher, useNavigate } from "@remix-run/react"

type Props = {
	recipe: Recipe;
	createRecipe?: boolean;
}

export default function RecipeWishlistButton({ recipe, createRecipe = false }: Props) {
	const navigate = useNavigate();
	const fetcher = useFetcher<{ id: string }>();

	const onClick = async () => {
		const route = createRecipe ? "/api/recipes/create" : '/api/recipes/update';
		fetcher.submit(route, {
			preventScrollReset: true,
			method: "POST",
		})
		if (createRecipe) {
			const { id, ...input } = recipe;

			console.log(input)
	
			const data = await recipesService.createRecipeAndAddToWishList({
				...input,
				isWishList: true,
			});

			console.log(data)
	
			if (data) {
				return navigate(`/recipes/${data.id}`);
			}
		}
	}

	return <WishlistButton isWishlist={recipe.isWishList} onClick={onClick} />
}