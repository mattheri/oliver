import { AuthorizationService } from 'src/auth/services/authorization.service';
import { DatabaseService } from 'src/db/services/db.service';
import { ImageModule } from 'src/image/image.module';
import { UsersModule } from 'src/users/users.module';

import { Module } from '@nestjs/common';

import { ExternalRecipePresenter } from './presenters/external-recipe.presenter';
import { RecipesResolver } from './resolvers/recipes.resolver';
import { ExternalRecipeService } from './services/external-recipe.service';
import { RecipeService } from './services/recipes.service';
import { RecipeAdapter } from './adapters/recipe.adapter';

@Module({
  providers: [
    DatabaseService,
    RecipeService,
    AuthorizationService,
    RecipesResolver,
    ExternalRecipeService,
    ExternalRecipePresenter,
    RecipeAdapter,
  ],
  imports: [UsersModule, ImageModule],
})
export class RecipesModule {}
