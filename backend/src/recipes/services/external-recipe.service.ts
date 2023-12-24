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

      return data.meals.map(
        this.externalRecipePresenter.externalRecipeToRecipe.bind(
          this.externalRecipePresenter,
        ),
      );
    } catch (e) {
      const error = e as Error;
      console.error(error.message);

      throw new BadRequestException(error.message);
    }
  }

  public async getRecipeById(id: string) {
    try {
      const { data } = await this.http.get<ExternalRecipeResponse>(
        `/${this.endpoints.LOOKUP}?${this.queryParams.SEARCH_BY_ID}=${id}`,
      );

      return data.meals.map(
        this.externalRecipePresenter.externalRecipeToRecipe.bind(
          this.externalRecipePresenter,
        ),
      )[0];
    } catch (e) {
      const error = e as Error;
      console.error(error.message);

      throw new BadRequestException(error.message);
    }
  }

  public async getRandomRecipe() {
    try {
      const { data } = await this.http.get<ExternalRecipeResponse>(
        `/${this.endpoints.RANDOM}`,
      );

      return data.meals.map(
        this.externalRecipePresenter.externalRecipeToRecipe.bind(
          this.externalRecipePresenter,
        ),
      )[0];
    } catch (e) {
      const error = e as Error;
      console.error(error.message);

      throw new BadRequestException(error.message);
    }
  }

  public async getMultipeRandomRecipes(amount = 10) {
    try {
      const promises = Array.from({ length: amount }).map(() => {
        return this.getRandomRecipe();
      });

      return Promise.all(promises);
    } catch (e) {
      const error = e as Error;
      console.error(error.message);

      throw new BadRequestException(error.message);
    }
  }
}
