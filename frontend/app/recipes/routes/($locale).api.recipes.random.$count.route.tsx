import { formAuthenticator } from "~/auth";
import { createBearerAccessTokenHeader } from "~/auth/utils/createBearerAccessTokenHeader";
import { Cache, client } from "~/http";
import { handleGqlErrors } from "~/utils/formatGqlErrors";

import type { LoaderArgs } from "@remix-run/node";

import RANDOM_RECIPES_QUERY from "../graphql/query/RandomRecipesQuery";
import type { Recipe } from "../types";

const DEFAULT_RANDOM_RECIPES_COUNT = 10;

export async function loader({ params, request }: LoaderArgs) {
  const count = Number(params.count) ?? DEFAULT_RANDOM_RECIPES_COUNT;

  const { data, errors } = await client.query<{ randomRecipes: Recipe[] }>(
    RANDOM_RECIPES_QUERY,
    {
      variables: {
        input: {
          amount: count,
        },
      },
      headers: {
        ...(await createBearerAccessTokenHeader(formAuthenticator, request)),
      },
      cache: Cache.Long(),
    },
  );

  handleGqlErrors(errors);

  return {
    randomRecipes: data?.randomRecipes ?? [],
  };
}
