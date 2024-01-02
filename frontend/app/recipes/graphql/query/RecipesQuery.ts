import { MINIMAL_RECIPE_FRAGMENT } from "../fragment/MinimalRecipeFragment";

const RECIPES_QUERY = `#graphql
	query Recipes {
		recipes {
			...recipeFields
		}
	}

	${MINIMAL_RECIPE_FRAGMENT}
`;

export default RECIPES_QUERY;