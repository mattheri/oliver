import { client } from "~/http";
import { handleGqlErrors } from "~/utils/formatGqlErrors";

import CREATE_RECIPE_MUTATION from "../graphql/mutation/CreateRecipeMutation";
import RECIPES_QUERY from "../graphql/query/RecipesQuery";
import type { CreateRecipeDto, Recipe } from "../types";

class RecipesService {
  static __instance: RecipesService;

  static get instance() {
    return this.__instance || (this.__instance = new this());
  }

  private readonly client: typeof client;

  constructor(httpClient: typeof client = client) {
    this.client = httpClient;
  }

  public async getRecipesByUserId() {
    const { data } = await this.client.query<{ recipes: Recipe[] }>(RECIPES_QUERY);

    return data?.recipes || [];
  }

  public async createRecipeAndAddToWishList(input: CreateRecipeDto) {
    const { data, errors } = await this.client.mutate<{ createRecipe: { id: string } }>(CREATE_RECIPE_MUTATION, {
      variables: {
        input,
      }
    })

    handleGqlErrors(errors);

    return data?.createRecipe;
  }
}

export default RecipesService.instance;
