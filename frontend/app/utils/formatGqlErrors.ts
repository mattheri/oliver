import type { HttpError } from "~/http";

export const handleGqlErrors = (errors?: HttpError[]) => {
	if (errors) {
		const formattedErrors = errors.map((error) => {
			console.error(error);

			return error.message;
		}).join('\n');

		throw new Response(formattedErrors, {
			status: errors[0].extensions?.originalError?.statusCode || 500,
		});
	}
}