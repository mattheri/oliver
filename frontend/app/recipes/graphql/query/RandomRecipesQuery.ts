const RANDOM_RECIPES_QUERY = `#graphql
	query RandomRecipes($amount: Int = 10) {
		randomRecipes(input: { amount: $amount }) {
			id
			title
			ingredients
			instructions
			userId
			image {
				width
				height
				src
				sizes {
					height
					width
					src
				}
			}
			url
			isExternalSrc
		}
	}
`

export default RANDOM_RECIPES_QUERY