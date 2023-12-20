import { RECIPE_FRAGMENT } from "../fragment/RecipeFragment";

export const RECIPE_QUERY = `#graphql
	query Recipe($id: Int!) @cached {
		recipes_by_pk(id: $id) {
			id
		}
	}

	${RECIPE_FRAGMENT}
`;
