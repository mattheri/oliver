import { ImageDto } from 'src/image/dto/image.dto';
import { ImageService } from 'src/image/services/image.service';

import { Injectable } from '@nestjs/common';

import {
  ExternalRecipe,
  ExternalRecipeCategory,
  Nullable,
} from '../interfaces/recipes.interface';
import { RecipeCategory } from '../models/recipe-category.model';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class ExternalRecipePresenter {
  constructor(private readonly imageService: ImageService) {}

  getImageMetadata(input: ImageDto) {
    return this.imageService.getImageMetadata(input);
  }

  async externalRecipeToRecipe(
    externalRecipe: ExternalRecipe,
    userId: string,
  ): Promise<Recipe> {
    const image: Recipe['image'] = externalRecipe.strMealThumb
      ? {
          id: externalRecipe.idMeal,
          ...(await this.getImageMetadata({
            src: externalRecipe.strMealThumb,
          })),
        }
      : null;

    const url = externalRecipe.strSource ? externalRecipe.strSource : null;

    return {
      id: externalRecipe.idMeal,
      title: externalRecipe.strMeal,
      instructions: this.formatInstructions(externalRecipe.strInstructions),
      userId,
      ingredients: this.filterIngredients(externalRecipe),
      image,
      url,
      isExternalSrc: true,
    };
  }

  externalRecipeCategoryToRecipeCategory(
    externalRecipeCategpru: ExternalRecipeCategory,
  ): RecipeCategory {
    return {
      name: externalRecipeCategpru.strCategory,
      url: `/recipes/categories/${externalRecipeCategpru.strCategory.toLowerCase()}`,
      image: externalRecipeCategpru.strCategoryThumb,
    };
  }

  private filterIngredients(externalRecipe: ExternalRecipe) {
    const ingredients = Object.entries(externalRecipe).filter(
      ([key, value]) => {
        return key.includes('Ingredient') && value;
      },
    );

    const measures = Object.entries(externalRecipe).filter(([key, value]) => {
      return key.includes('Measure') && value;
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return ingredients.map(([_, value], index) => {
      const measure = measures[index]?.[1];
      return measure ? `${value} ${measure}` : value;
    });
  }

  private formatInstructions(instructions: Nullable<string>) {
    if (!instructions) {
      return [];
    }

    return instructions
      .split('\n')
      .filter((instruction) => instruction)
      .map((instruction) => instruction.trim());
  }
}
