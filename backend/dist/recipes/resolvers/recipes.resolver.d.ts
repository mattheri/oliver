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
export declare class RecipesResolver {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    recipe({ id }: GetRecipeByIdDto): Promise<{
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
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        servings: number;
        prepTime: number;
        cookTime: number;
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
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        servings: number;
        prepTime: number;
        cookTime: number;
    }[]>;
    createRecipe(input: CreateRecipeDto, user?: User): Promise<{
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
        id: string;
        title: string;
        isExternalSrc: boolean;
        ingredients: string;
        instructions: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        ownerId: string;
    }>;
    updateRecipe(input: UpdateRecipeDto): Promise<{
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
        id: string;
        title: string;
        isExternalSrc: boolean;
        ingredients: string;
        instructions: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        ownerId: string;
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
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        servings: number;
        prepTime: number;
        cookTime: number;
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
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        servings: number;
        prepTime: number;
        cookTime: number;
    }[]>;
    addAllowView(input: UpdateAllowViewDto, user?: User): Promise<{
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
        id: string;
        title: string;
        isExternalSrc: boolean;
        ingredients: string;
        instructions: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        ownerId: string;
    }>;
    removeAllowView(input: UpdateAllowViewDto, user?: User): Promise<{
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
        id: string;
        title: string;
        isExternalSrc: boolean;
        ingredients: string;
        instructions: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        ownerId: string;
    }>;
    addAllowEdit(input: UpdateAllowEditDto, user?: User): Promise<{
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
        id: string;
        title: string;
        isExternalSrc: boolean;
        ingredients: string;
        instructions: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        ownerId: string;
    }>;
    removeAllowEdit(input: UpdateAllowEditDto, user?: User): Promise<{
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
        id: string;
        title: string;
        isExternalSrc: boolean;
        ingredients: string;
        instructions: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        ownerId: string;
    }>;
    addAllowDelete(input: UpdateAllowDeleteDto, user?: User): Promise<{
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
        id: string;
        title: string;
        isExternalSrc: boolean;
        ingredients: string;
        instructions: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        ownerId: string;
    }>;
    removeAllowDelete(input: UpdateAllowDeleteDto, user?: User): Promise<{
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
            recipeId: string;
        }[];
        id: string;
        title: string;
        isExternalSrc: boolean;
        ingredients: string;
        instructions: string;
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        ownerId: string;
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
        allowView: string;
        allowEdit: string;
        allowDelete: string;
        servings: number;
        prepTime: number;
        cookTime: number;
    })[]>;
    randomRecipes(input: GetRandomRecipesDto, user?: User): Promise<Recipe[]>;
}
