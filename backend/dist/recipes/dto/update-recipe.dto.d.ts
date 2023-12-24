import { RecipeImage } from '../models/recipe-image.model';
export declare class UpdateRecipeDto {
    id: string;
    title?: string;
    ingredients?: string;
    instructions?: string;
    image?: RecipeImage;
    isExternalSrc?: boolean;
    url?: string;
    allowView?: string;
    allowEdit?: string;
    allowDelete?: string;
}
