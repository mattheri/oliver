const UPDATE_USER_MUTATION = `#graphql
	mutation UpdateUser($input: UpdateUserDto!) {
		updateUser(input: $input) {
			id
			email
			accessToken
			name
			refreshToken
			created
			updated
			provider
		}
	}
`
export default UPDATE_USER_MUTATION;