import { JwtGqlAuthGuard } from 'src/auth/guard/jwt-gql-auth.guard';

import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { GetRecipeByIdDto } from '../dto/get-recipe-by-id.dto';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipes.service';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from '@prisma/client';
import { CreateRecipeDto } from '../dto/create-recipe.dto';
import { UpdateRecipeDto } from '../dto/update-recipe.dto';
import { DeleteRecipeDto } from '../dto/delete-recipe.dto';
import { DeleteManyRecipeDto } from '../dto/delete-many-recipe.dto';
import { UpdateAllowViewDto } from '../dto/update-allow-view.dto';
import { UpdateAllowEditDto } from '../dto/update-allow-edit.dto';
import { UpdateAllowDeleteDto } from '../dto/update-allow-delete.dto';
import { GetRandomRecipesDto } from '../dto/get-random-recipes.dto';

@Resolver(() => Recipe)
export class RecipesResolver {
  constructor(private readonly recipeService: RecipeService) {}

  @Query(() => Recipe)
  @UseGuards(JwtGqlAuthGuard)
  async recipe({ id }: GetRecipeByIdDto) {
    return this.recipeService.getRecipeById(id);
  }

  @Query(() => [Recipe])
  @UseGuards(JwtGqlAuthGuard)
  async recipesByUser(@CurrentUser() user?: User) {
    if (!user) throw new UnauthorizedException();

    return this.recipeService.getRecipesByUserEmail(user.email, true);
  }

  @Query(() => [Recipe])
  @UseGuards(JwtGqlAuthGuard)
  async recipes(@CurrentUser() user?: User) {
    return this.recipeService.getRecipesByUserId(user.id);
  }

  @Mutation(() => Recipe)
  @UseGuards(JwtGqlAuthGuard)
  async createRecipe(
    @Args('input') input: CreateRecipeDto,
    @CurrentUser() user?: User,
  ) {
    if (!user) throw new UnauthorizedException();

    return this.recipeService.createRecipe({ ...input, userId: user.id });
  }

  @Mutation(() => Recipe)
  @UseGuards(JwtGqlAuthGuard)
  async updateRecipe(@Args('input') input: UpdateRecipeDto) {
    return this.recipeService.updateRecipe(input);
  }

  @Mutation(() => Recipe)
  @UseGuards(JwtGqlAuthGuard)
  async deleteRecipe(@Args('input') input: DeleteRecipeDto) {
    return this.recipeService.deleteRecipe(input);
  }

  @Mutation(() => [Recipe])
  @UseGuards(JwtGqlAuthGuard)
  async deleteManyRecipes(@Args('input') input: DeleteManyRecipeDto) {
    return this.recipeService.deleteManyRecipes(input);
  }

  @Mutation(() => Recipe)
  @UseGuards(JwtGqlAuthGuard)
  async addAllowView(
    @Args('input') input: UpdateAllowViewDto,
    @CurrentUser() user?: User,
  ) {
    return this.recipeService.addAllowView(input, user);
  }

  @Mutation(() => Recipe)
  @UseGuards(JwtGqlAuthGuard)
  async removeAllowView(
    @Args('input') input: UpdateAllowViewDto,
    @CurrentUser() user?: User,
  ) {
    return this.recipeService.removeAllowView(input, user);
  }

  @Mutation(() => Recipe)
  @UseGuards(JwtGqlAuthGuard)
  async addAllowEdit(
    @Args('input') input: UpdateAllowEditDto,
    @CurrentUser() user?: User,
  ) {
    return this.recipeService.addAllowEdit(input, user);
  }

  @Mutation(() => Recipe)
  @UseGuards(JwtGqlAuthGuard)
  async removeAllowEdit(
    @Args('input') input: UpdateAllowEditDto,
    @CurrentUser() user?: User,
  ) {
    return this.recipeService.removeAllowEdit(input, user);
  }

  @Mutation(() => Recipe)
  @UseGuards(JwtGqlAuthGuard)
  async addAllowDelete(
    @Args('input') input: UpdateAllowDeleteDto,
    @CurrentUser() user?: User,
  ) {
    return this.recipeService.addAllowDelete(input, user);
  }

  @Mutation(() => Recipe)
  @UseGuards(JwtGqlAuthGuard)
  async removeAllowDelete(
    @Args('input') input: UpdateAllowDeleteDto,
    @CurrentUser() user?: User,
  ) {
    return this.recipeService.removeAllowDelete(input, user);
  }

  @Query(() => [Recipe])
  @UseGuards(JwtGqlAuthGuard)
  async recipesByUserEmail(@CurrentUser() user?: User) {
    return this.recipeService.getRecipesByUserEmail(user.email, true);
  }

  @Query(() => [Recipe])
  @UseGuards(JwtGqlAuthGuard)
  async randomRecipes(@Args('input') input: GetRandomRecipesDto) {
    return this.recipeService.getRandomRecipes(input);
  }
}
