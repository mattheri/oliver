import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RecipeAdapter } from '../adapters/recipe.adapter';
export interface Response<T> {
    data: T;
}
export declare class RecipeInterceptor<T> implements NestInterceptor<T, Response<T>> {
    private readonly recipeAdapter;
    constructor(recipeAdapter: RecipeAdapter);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<Response<T>>;
}
