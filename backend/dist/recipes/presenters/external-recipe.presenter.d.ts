import { ImageDto } from 'src/image/dto/image.dto';
import { ImageService } from 'src/image/services/image.service';
import { ExternalRecipe, ExternalRecipeCategory } from '../interfaces/recipes.interface';
import { RecipeCategory } from '../models/recipe-category.model';
import { Recipe } from '../models/recipe.model';
export declare class ExternalRecipePresenter {
    private readonly imageService;
    constructor(imageService: ImageService);
    getImageMetadata(input: ImageDto): Promise<{
        src: string;
        alt: string;
        width: number;
        height: number;
    }>;
    externalRecipeToRecipe(externalRecipe: ExternalRecipe, userId: string): Promise<Recipe>;
    externalRecipeCategoryToRecipeCategory(externalRecipeCategpru: ExternalRecipeCategory): RecipeCategory;
    private filterIngredients;
    private formatInstructions;
}
