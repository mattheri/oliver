import { client } from "~/http";
import { handleGqlErrors } from "~/utils/formatGqlErrors";

import CREATE_RECIPE_MUTATION from "../graphql/mutation/CreateRecipeMutation";
import RECIPES_QUERY from "../graphql/query/RecipesQuery";
import type { CreateRecipeDto, Recipe } from "../types";
import Joi from "joi";

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
    const { data } = await this.client.query<{ recipes: Recipe[] }>(
      RECIPES_QUERY,
    );

    return data?.recipes || [];
  }

  public async createRecipeAndAddToWishList(
    input: CreateRecipeDto,
    headers: Headers | Record<string, string>,
  ) {
    const { data, errors } = await this.client.mutate<{
      createRecipe: { id: string };
    }>(CREATE_RECIPE_MUTATION, {
      variables: {
        input,
      },
      headers,
    });

    handleGqlErrors(errors);

    return data?.createRecipe;
  }

  public recipeToCreateRecipeDto(
    formData: FormData,
    key: string = "recipe",
  ): CreateRecipeDto | null {
    const rawRecipe = String(formData.get(key));

    if (!rawRecipe) return null;

    const parsedRecipe = JSON.parse(rawRecipe);
    const { id, userId, image, ...recipe } = parsedRecipe;
    const { alt, ...img } = image;

    return {
      ...recipe,
      image: {
        ...img,
      },
      allowDelete: recipe.allowDelete || [],
      allowEdit: recipe.allowEdit || [],
      allowView: recipe.allowView || [],
    };
  }
}

export default RecipesService.instance;
