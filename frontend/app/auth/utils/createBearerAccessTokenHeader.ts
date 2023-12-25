import type { Authenticator } from "remix-auth";

import type { User } from "../types";

export const createBearerAccessTokenHeader = async (authenticator: Authenticator<User>, request: Request) => {
	const user = await authenticator.isAuthenticated(request);
	if (!user) {
		return {
			Authorization: "",
		};
	}

	return {
		Authorization: `Bearer ${user.accessToken}`,
	};
}