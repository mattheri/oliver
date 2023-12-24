const GET_USER_BY_EMAIL_QUERY = `#graphql
	query GetUserByEmail($email: String!) {
		user(input: { email: $email}) {
			id
			email
			accessToken
			name
			refreshToken
		}	
	}
`;

export default GET_USER_BY_EMAIL_QUERY;
