import { AuthorizationService } from 'src/auth/services/authorization.service';
import { DatabaseService } from 'src/db/services/db.service';
import { User } from '@prisma/client';
import { ICreateRecipeWithUserIdDto } from '../dto/create-recipe.dto';
import { DeleteManyRecipeDto } from '../dto/delete-many-recipe.dto';
import { DeleteRecipeDto } from '../dto/delete-recipe.dto';
import { GetRandomRecipesDto } from '../dto/get-random-recipes.dto';
import { UpdateAllowDeleteDto } from '../dto/update-allow-delete.dto';
import { UpdateAllowEditDto } from '../dto/update-allow-edit.dto';
import { UpdateAllowViewDto } from '../dto/update-allow-view.dto';
import { UpdateRecipeDto } from '../dto/update-recipe.dto';
import { ExternalRecipeService } from './external-recipe.service';
export declare class RecipeService {
    private readonly db;
    private readonly authorizationService;
    private readonly externalRecipeService;
    private readonly randomRecipesDefaultAmount;
    constructor(db: DatabaseService, authorizationService: AuthorizationService, externalRecipeService: ExternalRecipeService);
    getRecipesByUserId(userId?: string): Promise<{
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
    getRecipesByUserEmail(email?: string, includeOwner?: boolean): Promise<({
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
    })[]>;
    getWishlistRecipesByUserEmail(email?: string, includeOwner?: boolean): Promise<({
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
    getRecipeById(id: string, includeOwner?: boolean): Promise<{
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
    createRecipe(data: ICreateRecipeWithUserIdDto): Promise<{
        id: string;
        ownerId: string;
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
        url: string;
        title: string;
        ingredients: string;
        instructions: string;
        isExternalSrc: boolean;
        isWishList: boolean;
    }>;
    updateRecipe(data: UpdateRecipeDto): Promise<{
        id: string;
        ownerId: string;
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
        title: string;
        ingredients: string;
        instructions: string;
        isExternalSrc: boolean;
    }>;
    addAllowView({ id, email }: UpdateAllowViewDto, user: User): Promise<{
        id: string;
        ownerId: string;
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
        title: string;
        ingredients: string;
        instructions: string;
        isExternalSrc: boolean;
    }>;
    addAllowEdit({ id, email }: UpdateAllowEditDto, user: User): Promise<{
        id: string;
        ownerId: string;
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
        title: string;
        ingredients: string;
        instructions: string;
        isExternalSrc: boolean;
    }>;
    addAllowDelete({ id, email }: UpdateAllowDeleteDto, user: User): Promise<{
        id: string;
        ownerId: string;
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
        title: string;
        ingredients: string;
        instructions: string;
        isExternalSrc: boolean;
    }>;
    removeAllowView({ id, email }: UpdateAllowDeleteDto, user: User): Promise<{
        id: string;
        ownerId: string;
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
        title: string;
        ingredients: string;
        instructions: string;
        isExternalSrc: boolean;
    }>;
    removeAllowEdit({ id, email }: UpdateAllowDeleteDto, user: User): Promise<{
        id: string;
        ownerId: string;
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
        title: string;
        ingredients: string;
        instructions: string;
        isExternalSrc: boolean;
    }>;
    removeAllowDelete({ id, email }: UpdateAllowDeleteDto, user: User): Promise<{
        id: string;
        ownerId: string;
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
        title: string;
        ingredients: string;
        instructions: string;
        isExternalSrc: boolean;
    }>;
    deleteRecipe({ id }: DeleteRecipeDto): Promise<{
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
    deleteManyRecipes({ ids }: DeleteManyRecipeDto): Promise<{
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
    getRandomRecipes({ amount }: GetRandomRecipesDto, user?: User): Promise<import("../models/recipe.model").Recipe[]>;
    getExternalRecipeById(id: string, user?: User): Promise<import("../models/recipe.model").Recipe>;
}
