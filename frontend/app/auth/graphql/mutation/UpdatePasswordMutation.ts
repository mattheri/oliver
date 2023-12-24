const UPDATE_PASSWORD_MUTATION = `#graphql
	mutation UpdatePassword($input: UpdatePasswordDto!) {
		updatePassword(input: $input) {
			accessToken
			refreshToken
		}
	}
`

export default UPDATE_PASSWORD_MUTATION;