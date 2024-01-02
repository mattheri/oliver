const CREATE_RECIPE_MUTATION = `#graphql
	mutation CreateRecipe($input: CreateRecipeDto!) {
		createRecipe(input: $input) {
			id
		}
	}
`;

export default CREATE_RECIPE_MUTATION;