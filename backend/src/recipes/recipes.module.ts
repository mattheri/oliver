import { AuthorizationService } from 'src/auth/services/authorization.service';
import { DatabaseService } from 'src/db/services/db.service';
import { UserService } from 'src/users/services/user.service';

import { Module } from '@nestjs/common';

import { ExternalRecipePresenter } from './presenters/external-recipe.presenter';
import { RecipesResolver } from './resolvers/recipes.resolver';
import { ExternalRecipeService } from './services/external-recipe.service';

@Module({
  providers: [
    DatabaseService,
    UserService,
    AuthorizationService,
    RecipesResolver,
    ExternalRecipeService,
    ExternalRecipePresenter,
  ],
})
export class RecipesModule {}
