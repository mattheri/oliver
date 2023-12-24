const REFRESH_TOKEN_MUTATION = `#graphql
	mutation RefreshToken {
		refreshToken {
			accessToken
			refreshToken
		}
	}
`

export default REFRESH_TOKEN_MUTATION;