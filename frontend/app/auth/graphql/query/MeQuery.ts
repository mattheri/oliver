const ME_QUERY = `#graphql
	query Me {
		me {
			id
			email
			name
			created
			updated
			provider
			accessToken
			refreshToken
		}
	}
`;

export default ME_QUERY;