import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { RecipeAdapter } from '../adapters/recipe.adapter';

export interface Response<T> {
  data: T;
}

@Injectable()
export class RecipeInterceptor<T> implements NestInterceptor<T, Response<T>> {
  constructor(private readonly recipeAdapter: RecipeAdapter) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        if (!data) return data;

        if (Array.isArray(data)) {
          return data.map(
            this.recipeAdapter.dbRecipeToGqlRecipe.bind(this.recipeAdapter),
          );
        } else if (typeof data === 'object') {
          return this.recipeAdapter.dbRecipeToGqlRecipe(data);
        }
      }),
    );
  }
}
