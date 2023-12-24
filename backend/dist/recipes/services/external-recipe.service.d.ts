import { ExternalRecipePresenter } from '../presenters/external-recipe.presenter';
export declare class ExternalRecipeService {
    private readonly externalRecipePresenter;
    constructor(externalRecipePresenter: ExternalRecipePresenter);
    private readonly apiUrl;
    private readonly http;
    private readonly endpoints;
    private readonly queryParams;
    getCategories(): Promise<unknown[]>;
    getRecipesByCategory(category: string): Promise<unknown[]>;
    getRecipeById(id: string): Promise<unknown>;
    getRandomRecipe(): Promise<unknown>;
    getMultipeRandomRecipes(amount?: number): Promise<unknown[]>;
}
