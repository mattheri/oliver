import { RecipeImage } from './recipe-image.model';
export declare class Recipe {
    id: string;
    title: string;
    ingredients: string[];
    instructions: string[];
    userId: string;
    image?: RecipeImage;
    isExternalSrc?: boolean;
    url?: string;
    allowView?: string[];
    allowEdit?: string[];
    allowDelete?: string[];
}
