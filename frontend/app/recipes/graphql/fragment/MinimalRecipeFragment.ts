export const MINIMAL_RECIPE_FRAGMENT = `#graphql
	fragment recipeFields on Recipe {
		id
		title
		ingredients
		image {
			alt
			height
			width
			src
		}
		isExternalSrc
		isWishList
	}
`;