import { ExternalRecipe, ExternalRecipeCategory } from '../interfaces/recipes.interface';
import { RecipeCategory } from '../models/recipe-category.model';
import { Recipe } from '../models/recipe.model';
export declare class ExternalRecipePresenter {
    externalRecipeToRecipe(externalRecipe: ExternalRecipe, userId: string): Recipe;
    externalRecipeCategoryToRecipeCategory(externalRecipeCategpru: ExternalRecipeCategory): RecipeCategory;
    private filterIngredients;
    private formatInstructions;
}
