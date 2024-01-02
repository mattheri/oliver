import { RECIPE_FRAGMENT } from "../fragment/RecipeFragment";

const EXTERNAL_RECIPE_QUERY = `#graphql
	query ExternalRecipe($id: String!) {
		externalRecipe(input: { id: $id }) {
			...recipeFields
		}
	}

	${RECIPE_FRAGMENT}
`;

export default EXTERNAL_RECIPE_QUERY;