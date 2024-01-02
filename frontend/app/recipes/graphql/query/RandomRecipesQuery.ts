import { MINIMAL_RECIPE_FRAGMENT } from "../fragment/MinimalRecipeFragment"

const RANDOM_RECIPES_QUERY = `#graphql
	query RandomRecipes($amount: Int = 10) {
		randomRecipes(input: { amount: $amount }) {
			...recipeFields
		}
	}

	${MINIMAL_RECIPE_FRAGMENT}
`

export default RANDOM_RECIPES_QUERY