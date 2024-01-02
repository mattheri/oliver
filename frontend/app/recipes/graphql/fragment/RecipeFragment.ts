export const RECIPE_FRAGMENT = `#graphql
	fragment recipeFields on Recipe {
		id
		title
		ingredients
		instructions
		servings
		prepTime
		cookTime
		userId
		image {
			alt
			height
			width
			src
		}
		isExternalSrc
		url
		allowView
		allowEdit
		allowDelete
		isWishList
	}
`;
