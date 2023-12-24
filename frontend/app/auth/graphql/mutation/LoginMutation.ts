const LOGIN_MUTATION = `#graphql
	mutation Login($input: LoginDto!) {
		login(input: $input) {
			id
			email
			name
			accessToken
			refreshToken
		}
	}
`

export default LOGIN_MUTATION;