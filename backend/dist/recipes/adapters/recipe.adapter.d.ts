import { Recipe as DbRecipe, RecipeImage } from '@prisma/client';
import { Recipe } from '../models/recipe.model';
interface DbRecipeWithImage extends DbRecipe {
    image: RecipeImage[];
}
export declare class RecipeAdapter {
    dbRecipeToGqlRecipe(dbRecipe: DbRecipeWithImage): Recipe;
}
export {};
