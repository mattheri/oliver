import { RECIPE_FRAGMENT } from "../fragment/RecipeFragment";

export const RECIPES_BY_USER_QUERY = `#graphql
	query RecipesByUser($userId: String!) @cached {
		recipes(where: {user_id: {_eq: $userId}}) {
			id
			...Recipe
		}
	}

	${RECIPE_FRAGMENT}
`;
