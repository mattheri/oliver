import axios from 'axios';

import { BadRequestException, Injectable } from '@nestjs/common';

import {
  ExternalRecipeCategoryResponse,
  ExternalRecipeResponse,
} from '../interfaces/recipes.interface';
import { ExternalRecipePresenter } from '../presenters/external-recipe.presenter';
import {
  EXTERNAL_RECIPE_API_URL,
  EXTERNAL_RECIPE_ENDPOINTS,
  EXTERNAL_RECIPE_QUERY_PARAMS,
} from '../recipes.constants';

@Injectable()
export class ExternalRecipeService {
  constructor(
    private readonly externalRecipePresenter: ExternalRecipePresenter,
  ) {}
  private readonly apiUrl = EXTERNAL_RECIPE_API_URL;
  private readonly http = axios.create({
    baseURL: this.apiUrl,
  });
  private readonly endpoints = EXTERNAL_RECIPE_ENDPOINTS;
  private readonly queryParams = EXTERNAL_RECIPE_QUERY_PARAMS;

  public async getCategories() {
    try {
      const { data } = await this.http.get<ExternalRecipeCategoryResponse>(
        `/${this.endpoints.CATEGORIES}`,
      );

      return data.categories.map(
        this.externalRecipePresenter.externalRecipeCategoryToRecipeCategory.bind(
          this.externalRecipePresenter,
        ),
      );
    } catch (e) {
      const error = e as Error;
      console.error(error.message);

      throw new BadRequestException(error.message);
    }
  }

  public async getRecipesByCategory(category: string) {
    try {
      const { data } = await this.http.get<ExternalRecipeResponse>(
        `/${this.endpoints.FILTER}?${this.queryParams.FILTER_BY_CATEGORY}=${category}`,
      );

      return Promise.all(
        data.meals.map(
          this.externalRecipePresenter.externalRecipeToRecipe.bind(
            this.externalRecipePresenter,
          ),
        ),
      );
    } catch (e) {
      const error = e as Error;
      console.error(error.message);

      throw new BadRequestException(error.message);
    }
  }

  public async getRecipeById(id: string, userId: string) {
    try {
      const { data } = await this.http.get<ExternalRecipeResponse>(
        `/${this.endpoints.LOOKUP}?${this.queryParams.SEARCH_BY_ID}=${id}`,
      );

      const recipe = Promise.all(
        data.meals.map(async (externalRecipe) =>
          this.externalRecipePresenter.externalRecipeToRecipe(
            externalRecipe,
            userId,
          ),
        ),
      );

      return recipe[0];
    } catch (e) {
      const error = e as Error;
      console.error(error.message);

      throw new BadRequestException(error.message);
    }
  }

  public async getRandomRecipe(userId?: string) {
    try {
      const { data } = await this.http.get<ExternalRecipeResponse>(
        `/${this.endpoints.RANDOM}`,
      );

      const recipes = await Promise.all(
        data.meals.map(async (externalRecipe) =>
          this.externalRecipePresenter.externalRecipeToRecipe(
            externalRecipe,
            userId,
          ),
        ),
      );

      return recipes[0];
    } catch (e) {
      const error = e as Error;
      console.error(error.message);

      throw new BadRequestException(error.message);
    }
  }

  public async getMultipeRandomRecipes(userId?: string, amount = 10) {
    try {
      const promises = Array.from({ length: amount }).map(() => {
        return this.getRandomRecipe(userId);
      });

      return Promise.all(promises);
    } catch (e) {
      const error = e as Error;
      console.error(error.message);

      throw new BadRequestException(error.message);
    }
  }
}
