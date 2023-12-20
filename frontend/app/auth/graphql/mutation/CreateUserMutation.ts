const CREATE_USER_MUTATION = `#graphql
	mutation CreateUser($email: String!, $password: String!, $provider: String!) {
		insert_users_one(object: { email: $email, password: $password, provider: $provider }) {
			email
			id
			name
			provider
		}
	}
`;

export default CREATE_USER_MUTATION;
