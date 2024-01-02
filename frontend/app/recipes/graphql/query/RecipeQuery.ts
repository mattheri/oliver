import { RECIPE_FRAGMENT } from "../fragment/RecipeFragment";

export const RECIPE_QUERY = `#graphql
	query RecipeById($id: ID!) {
		recipe(input: { id: $id }) {
			...recipeFields
		}
	}

	${RECIPE_FRAGMENT}
`;
