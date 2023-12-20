const GET_USER_BY_EMAIL_QUERY = `#graphql
	query GetUserByEmail($email: String!) @cached {
		users(distinct_on: email, where: {email: {_eq: $email}}) {
			email
			id
			name
			password
			provider
		}
	}
`;

export default GET_USER_BY_EMAIL_QUERY;
