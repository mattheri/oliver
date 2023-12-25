import { UpdateRecipeImageDto } from './update-recipe-image.dto';
export declare class UpdateRecipeDto {
    id: string;
    title?: string;
    ingredients?: string;
    instructions?: string;
    image?: UpdateRecipeImageDto;
    isExternalSrc?: boolean;
    url?: string;
    allowView?: string;
    allowEdit?: string;
    allowDelete?: string;
}
