import { GetRecipeByIdDto } from '../dto/get-recipe-by-id.dto';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipes.service';
import { User } from '@prisma/client';
import { CreateRecipeDto } from '../dto/create-recipe.dto';
import { UpdateRecipeDto } from '../dto/update-recipe.dto';
import { DeleteRecipeDto } from '../dto/delete-recipe.dto';
import { DeleteManyRecipeDto } from '../dto/delete-many-recipe.dto';
import { UpdateAllowViewDto } from '../dto/update-allow-view.dto';
import { UpdateAllowEditDto } from '../dto/update-allow-edit.dto';
import { UpdateAllowDeleteDto } from '../dto/update-allow-delete.dto';
import { GetRandomRecipesDto } from '../dto/get-random-recipes.dto';
import { GetExternalRecipeByIdDto } from '../dto/get-external-recipe-by-id.dto';
export declare class RecipesResolver {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    recipe(input: GetRecipeByIdDto): Promise<{
        owner: {
            id: string;
            name: string;
            email: string;
            provider: string;
            password: string;
            refreshToken: string;
            created: Date;
            updated: Date;
        };
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
    } & {
        id: string;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        created: Date;
        updated: Date;
        isExternalSrc: boolean;
        url: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        servings: number;
        prepTime: number;
        cookTime: number;
        isWishList: boolean;
    }>;
    recipesByUser(user?: User): Promise<({
        owner: {
            id: string;
            name: string;
            email: string;
            provider: string;
            password: string;
            refreshToken: string;
            created: Date;
            updated: Date;
        };
    } & {
        id: string;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        created: Date;
        updated: Date;
        isExternalSrc: boolean;
        url: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        servings: number;
        prepTime: number;
        cookTime: number;
        isWishList: boolean;
    })[]>;
    wishlistRecipes(user?: User): Promise<({
        owner: {
            id: string;
            name: string;
            email: string;
            provider: string;
            password: string;
            refreshToken: string;
            created: Date;
            updated: Date;
        };
    } & {
        id: string;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        created: Date;
        updated: Date;
        isExternalSrc: boolean;
        url: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        servings: number;
        prepTime: number;
        cookTime: number;
        isWishList: boolean;
    })[]>;
    recipes(user?: User): Promise<{
        id: string;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        created: Date;
        updated: Date;
        isExternalSrc: boolean;
        url: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        servings: number;
        prepTime: number;
        cookTime: number;
        isWishList: boolean;
    }[]>;
    createRecipe(input: CreateRecipeDto, user?: User): Promise<{
        id: string;
        title: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        isExternalSrc: boolean;
        url: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        isWishList: boolean;
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
    }>;
    updateRecipe(input: UpdateRecipeDto): Promise<{
        id: string;
        title: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        isExternalSrc: boolean;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
    }>;
    deleteRecipe(input: DeleteRecipeDto): Promise<{
        id: string;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        created: Date;
        updated: Date;
        isExternalSrc: boolean;
        url: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        servings: number;
        prepTime: number;
        cookTime: number;
        isWishList: boolean;
    }>;
    deleteManyRecipes(input: DeleteManyRecipeDto): Promise<{
        id: string;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        created: Date;
        updated: Date;
        isExternalSrc: boolean;
        url: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        servings: number;
        prepTime: number;
        cookTime: number;
        isWishList: boolean;
    }[]>;
    addAllowView(input: UpdateAllowViewDto, user?: User): Promise<{
        id: string;
        title: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        isExternalSrc: boolean;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
    }>;
    removeAllowView(input: UpdateAllowViewDto, user?: User): Promise<{
        id: string;
        title: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        isExternalSrc: boolean;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
    }>;
    addAllowEdit(input: UpdateAllowEditDto, user?: User): Promise<{
        id: string;
        title: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        isExternalSrc: boolean;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
    }>;
    removeAllowEdit(input: UpdateAllowEditDto, user?: User): Promise<{
        id: string;
        title: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        isExternalSrc: boolean;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
    }>;
    addAllowDelete(input: UpdateAllowDeleteDto, user?: User): Promise<{
        id: string;
        title: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        isExternalSrc: boolean;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
    }>;
    removeAllowDelete(input: UpdateAllowDeleteDto, user?: User): Promise<{
        id: string;
        title: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        isExternalSrc: boolean;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
    }>;
    recipesByUserEmail(user?: User): Promise<({
        owner: {
            id: string;
            name: string;
            email: string;
            provider: string;
            password: string;
            refreshToken: string;
            created: Date;
            updated: Date;
        };
    } & {
        id: string;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        created: Date;
        updated: Date;
        isExternalSrc: boolean;
        url: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        servings: number;
        prepTime: number;
        cookTime: number;
        isWishList: boolean;
    })[]>;
    randomRecipes(input: GetRandomRecipesDto, user?: User): Promise<Recipe[]>;
    externalRecipe(input: GetExternalRecipeByIdDto, user?: User): Promise<Recipe>;
}
