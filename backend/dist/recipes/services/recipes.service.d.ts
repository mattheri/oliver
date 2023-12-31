import { AuthorizationService } from 'src/auth/services/authorization.service';
import { DatabaseService } from 'src/db/services/db.service';
import { User } from '@prisma/client';
import { CreateRecipeWithUserIdDto } from '../dto/create-recipe.dto';
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
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        servings: number;
        prepTime: number;
        cookTime: number;
        isWishList: boolean;
    }>;
    createRecipe(data: CreateRecipeWithUserIdDto): Promise<{
        id: string;
        title: string;
        ingredients: string;
        instructions: string;
        ownerId: string;
        isExternalSrc: boolean;
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
    updateRecipe(data: UpdateRecipeDto): Promise<{
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
    addAllowView({ id, email }: UpdateAllowViewDto, user: User): Promise<{
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
    addAllowEdit({ id, email }: UpdateAllowEditDto, user: User): Promise<{
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
    addAllowDelete({ id, email }: UpdateAllowDeleteDto, user: User): Promise<{
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
    removeAllowView({ id, email }: UpdateAllowDeleteDto, user: User): Promise<{
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
    removeAllowEdit({ id, email }: UpdateAllowDeleteDto, user: User): Promise<{
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
    removeAllowDelete({ id, email }: UpdateAllowDeleteDto, user: User): Promise<{
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
