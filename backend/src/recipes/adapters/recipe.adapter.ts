import { Injectable } from '@nestjs/common';
import { Recipe as DbRecipe, RecipeImage } from '@prisma/client';
import { Recipe } from '../models/recipe.model';

interface DbRecipeWithImage extends DbRecipe {
  image: RecipeImage[];
}

@Injectable()
export class RecipeAdapter {
  dbRecipeToGqlRecipe(dbRecipe: DbRecipeWithImage): Recipe {
    const userId = dbRecipe.ownerId;
    const ingredients = dbRecipe.ingredients?.split(',') ?? [];
    const instructions = dbRecipe.instructions?.split(',') ?? [];
    const allowView = dbRecipe.allowView?.split(',') ?? [];
    const allowEdit = dbRecipe.allowEdit?.split(',') ?? [];
    const allowDelete = dbRecipe.allowDelete?.split(',') ?? [];

    return {
      ...dbRecipe,
      userId,
      ingredients,
      instructions,
      allowView,
      allowEdit,
      allowDelete,
      image: {
        height: dbRecipe.image[0].height,
        width: dbRecipe.image[0].width,
        src: dbRecipe.image[0].url,
      },
    };
  }
}
