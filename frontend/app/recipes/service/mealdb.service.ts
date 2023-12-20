import type { MealDBRecipeResponse, MealDbCategoryResponse } from "../types";

import MealDBPresenter from "../presenters/mealdb.presenter";

import {
  MEAL_DB_BASE_URL,
  MEAL_DB_ENDPOINTS,
  MEAL_DB_QUERY_PARAMS,
} from "../constants";

class MealDbService {
  static _instance: MealDbService;

  static get instance(): MealDbService {
    return this._instance || (this._instance = new this());
  }

  private readonly baseUrl = MEAL_DB_BASE_URL;
  private readonly endopoints = MEAL_DB_ENDPOINTS;
  private readonly queryParam = MEAL_DB_QUERY_PARAMS;
  private readonly presenter: MealDBPresenter = new MealDBPresenter();

  public async getCategories() {
    try {
      const response = await fetch(
        `${this.baseUrl}/${this.endopoints.CATEGORIES}`,
      );
      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);

      const data = (await response.json()) as MealDbCategoryResponse;

      return data.categories.map(
        this.presenter.mealDbCategoryToRecipeCategory.bind(this.presenter),
      );
    } catch (e) {
      const error = e as Error;
      console.log(error.message);

      throw error;
    }
  }

  public async getRecipesByCategory(category: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/${this.endopoints.FILTER}?${this.queryParam.FILTER_BY_CATEGORY}=${category}`,
      );

      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);

      const data = (await response.json()) as MealDBRecipeResponse;

      return data.meals.map(this.presenter.mealDbToRecipe.bind(this.presenter));
    } catch (e) {
      const error = e as Error;
      console.log(error.message);

      throw error;
    }
  }

  public async getRecipeById(id: number) {
    try {
      const response = await fetch(
        `${this.baseUrl}/${this.endopoints.LOOKUP}?${this.queryParam.SEARCH_BY_ID}=${id}`,
      );

      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);

      const data = (await response.json()) as MealDBRecipeResponse;

      return data.meals.map(
        this.presenter.mealDbToRecipe.bind(this.presenter),
      )[0];
    } catch (e) {
      const error = e as Error;
      console.log(error.message);

      throw error;
    }
  }

  public async getRandomRecipe() {
    try {
      const response = await fetch(`${this.baseUrl}/${this.endopoints.RANDOM}`);

      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);

      const data = (await response.json()) as MealDBRecipeResponse;
      return data.meals.map(
        this.presenter.mealDbToRecipe.bind(this.presenter),
      )[0];
    } catch (e) {
      const error = e as Error;
      console.log(error.message);

      throw error;
    }
  }

  public async getMultipeRandomRecipes(amount: number = 10) {
    try {
      const promises = Array.from({ length: amount }).map(() => {
        return this.getRandomRecipe();
      });

      return Promise.all(promises);
    } catch (e) {
      const error = e as Error;
      console.log(error.message);

      throw error;
    }
  }
}

export default MealDbService.instance;
