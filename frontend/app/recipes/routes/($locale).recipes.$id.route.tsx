import { formAuthenticator } from "~/auth";
import { createBearerAccessTokenHeader } from "~/auth/utils/createBearerAccessTokenHeader";
import type { HttpError } from "~/http";
import { Cache, client } from "~/http";
import { handleGqlErrors } from "~/utils/formatGqlErrors";

import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Recipe from "../components/Recipe/Recipe";
import EXTERNAL_RECIPE_QUERY from "../graphql/query/ExternalRecipeQuery";
import { RECIPE_QUERY } from "../graphql/query/RecipeQuery";
import type { Recipe as IRecipe } from "../types";

export const loader = async ({ request, params }: LoaderArgs) => {
	const url = new URL(request.url);
	const isExternalSrc = url.searchParams.get("isExternalSrc") === "true";
	const id = String(params.id);
	const variables = {
		id
	}

	let errors: HttpError[] = [];
	let data: IRecipe | undefined;

	if (!id) {
		throw new Response("Not found", { status: 404 })
	}

	if (isExternalSrc) {
		const res = await client.query<{ externalRecipe: IRecipe }>(EXTERNAL_RECIPE_QUERY, {
			variables: variables,
			headers: {
				...(await createBearerAccessTokenHeader(formAuthenticator, request)),
			},
			cache: Cache.Long(),
		});

		errors = res.errors ?? [];
		data = res.data?.externalRecipe;
	} else {
		const res = await client.query<{ recipe: IRecipe }>(RECIPE_QUERY, {
			variables: variables,
			headers: {
				...(await createBearerAccessTokenHeader(formAuthenticator, request)),
			},
			cache: Cache.Long(),
		});

		errors = res.errors ?? [];
		data = res.data?.recipe;
	}


	if (errors.length) handleGqlErrors(errors);

	return {
		recipe: data,
	};
}

export default function Index() {
	const { recipe } = useLoaderData<typeof loader>();

	return (
		<main className="flex flex-col py-12 section-container">
      <Recipe
        {...recipe}
      />
    </main>
	);
}