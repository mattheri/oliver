import { CreateRecipeImageDto } from './create-recipe-image.dto';
export declare class CreateRecipeWithUserIdDto {
    title: string;
    ingredients: string;
    instructions: string;
    servings?: number;
    prepTime?: number;
    cookTime?: number;
    userId: string;
    image?: CreateRecipeImageDto;
    isExternalSrc?: boolean;
    url?: string;
    allowView: string;
    allowEdit: string;
    allowDelete: string;
    isWishList?: boolean;
}
declare const CreateRecipeDto_base: import("@nestjs/common").Type<Omit<CreateRecipeWithUserIdDto, "userId">>;
export declare class CreateRecipeDto extends CreateRecipeDto_base {
}
export {};
