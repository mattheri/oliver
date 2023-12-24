import { client } from "~/http";

// import { RECIPES_BY_USER_QUERY } from "../graphql/query/RecipesByUserQuery";
// import type { Recipe } from "../types";

class RecipesService {
  static __instance: RecipesService;

  static get instance() {
    return this.__instance || (this.__instance = new this());
  }

  private readonly client: typeof client;

  constructor(httpClient: typeof client = client) {
    this.client = httpClient;
  }

  public async getRecipesByUserId(userId?: string) {
    return []
    // if (!userId) return [];

    // const { data } = await this.client.query<{ recipes: Recipe[] }>(
    //   RECIPES_BY_USER_QUERY,
    //   {
    //     variables: { userId },
    //   },
    // );

    // return data?.recipes ?? [];
  }
}

export default RecipesService.instance;
