import { Image } from 'src/image/models/image.model';
export declare class Recipe {
    id: string;
    title: string;
    ingredients: string[];
    instructions: string[];
    servings?: number;
    prepTime?: number;
    cookTime?: number;
    userId: string;
    image?: Image;
    isExternalSrc?: boolean;
    url?: string;
    allowView?: string[];
    allowEdit?: string[];
    allowDelete?: string[];
}
