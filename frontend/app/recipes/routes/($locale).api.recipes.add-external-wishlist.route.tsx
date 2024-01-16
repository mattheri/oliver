import { ActionArgs, json } from "@remix-run/node";
import recipesService from "../service/recipes.service";
import { RECIPE_API_ERROR_CODES } from "../constants";
import { createBearerAccessTokenHeader } from "~/auth/utils/createBearerAccessTokenHeader";
import { formAuthenticator } from "~/auth";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const recipeDto = recipesService.recipeToCreateRecipeDto(formData);

  if (!recipeDto) {
    return json(
      { code: RECIPE_API_ERROR_CODES.INVALID_RECIPE },
      { status: 400 },
    );
  }

  const headers = await createBearerAccessTokenHeader(
    formAuthenticator,
    request,
  );
  console.log(headers);
  const recipe = await recipesService.createRecipeAndAddToWishList(
    recipeDto,
    headers,
  );

  if (!recipe) {
    return json(
      { code: RECIPE_API_ERROR_CODES.RECIPE_NOT_CREATED },
      { status: 500 },
    );
  }

  return json(recipe);
}
