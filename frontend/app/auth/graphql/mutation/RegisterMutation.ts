const REGISTER_MUTATION = `#graphql
	mutation Register($input: SignUpDto!) {
		register(input: $input) {
			id
			email
			name
			accessToken
			refreshToken
		}
	}
`

export default REGISTER_MUTATION;