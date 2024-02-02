import { MINIMAL_RECIPE_FRAGMENT } from "../fragment/MinimalRecipeFragment";

const RECIPES_QUERY = `#graphql
	query RecipesByUser {
		recipesByUser {
			...recipeFields
		}
	}

	${MINIMAL_RECIPE_FRAGMENT}
`;

export default RECIPES_QUERY;
