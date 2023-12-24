import { RecipeImage } from '../models/recipe-image.model';
export declare class CreateRecipeDto {
    title: string;
    ingredients: string;
    instructions: string;
    userId: string;
    image?: RecipeImage;
    isExternalSrc?: boolean;
    url?: string;
    allowView: string;
    allowEdit: string;
    allowDelete: string;
}
