import { AuthorizationLevel } from 'src/auth/interfaces/auth.interfaces';
import { AuthorizationService } from 'src/auth/services/authorization.service';
import { DatabaseService } from 'src/db/services/db.service';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@prisma/client';

import { CreateRecipeWithUserIdDto } from '../dto/create-recipe.dto';
import { DeleteManyRecipeDto } from '../dto/delete-many-recipe.dto';
import { DeleteRecipeDto } from '../dto/delete-recipe.dto';
import { GetRandomRecipesDto } from '../dto/get-random-recipes.dto';
import { UpdateAllowDeleteDto } from '../dto/update-allow-delete.dto';
import { UpdateAllowEditDto } from '../dto/update-allow-edit.dto';
import { UpdateAllowViewDto } from '../dto/update-allow-view.dto';
import { UpdateRecipeDto } from '../dto/update-recipe.dto';
import { RANDOM_RECIPE_DEFAULT_AMOUNT } from '../recipes.constants';
import { ExternalRecipeService } from './external-recipe.service';

@Injectable()
export class RecipeService {
  private readonly randomRecipesDefaultAmount = RANDOM_RECIPE_DEFAULT_AMOUNT;

  constructor(
    private readonly db: DatabaseService,
    private readonly authorizationService: AuthorizationService,
    private readonly externalRecipeService: ExternalRecipeService,
  ) {}

  public async getRecipesByUserId(userId?: string) {
    return this.db.recipe.findMany({ where: { ownerId: userId } });
  }

  public async getRecipesByUserEmail(email?: string, includeOwner = false) {
    const recipes = await this.db.recipe.findMany({
      where: {
        OR: [
          { owner: { email } },
          { allowView: { contains: email } },
          { allowEdit: { contains: email } },
          { allowDelete: { contains: email } },
        ],
      },
      include: { owner: includeOwner },
    });

    return [...new Set(recipes)];
  }

  public async getRecipeById(id: string, includeOwner = false) {
    return this.db.recipe.findUnique({
      where: { id },
      include: { owner: includeOwner },
    });
  }

  public async createRecipe(data: CreateRecipeWithUserIdDto) {
    const {
      userId,
      image: { id, src, ...image },
      ...recipe
    } = data;

    return this.db.recipe.create({
      data: {
        ...recipe,
        owner: { connect: { id: userId } },
        image: {
          connectOrCreate: {
            where: { id },
            create: { url: src, ...image },
          },
        },
      },
      select: {
        id: true,
        title: true,
        ingredients: true,
        instructions: true,
        ownerId: true,
        image: true,
        isExternalSrc: true,
        allowDelete: true,
        allowEdit: true,
        allowView: true,
      },
    });
  }

  public async updateRecipe(data: UpdateRecipeDto) {
    const {
      image: { id: imageId, src, ...image },
      ...recipe
    } = data;

    return this.db.recipe.update({
      where: { id: recipe.id },
      data: {
        ...recipe,
        image: {
          connectOrCreate: {
            where: { id: imageId },
            create: { url: src, ...image },
          },
        },
      },
      select: {
        id: true,
        title: true,
        ingredients: true,
        instructions: true,
        ownerId: true,
        image: true,
        isExternalSrc: true,
        allowDelete: true,
        allowEdit: true,
        allowView: true,
      },
    });
  }

  public async addAllowView({ id, email }: UpdateAllowViewDto, user: User) {
    const recipe = await this.getRecipeById(id, true);
    const allowEditEmails = recipe.allowEdit?.split(',') ?? [];
    const allowViewEmails = recipe.allowView?.split(',') ?? [];

    if (
      !this.authorizationService.canI({
        email: user.email,
        allowView: allowEditEmails,
        level: AuthorizationLevel.Edit,
        ownerEmail: recipe.owner.email,
      })
    ) {
      throw new UnauthorizedException();
    }

    return this.db.recipe.update({
      where: { id },
      data: {
        allowView: this.authorizationService
          .addEmailToAllowList({
            list: allowViewEmails,
            email,
          })
          .join(','),
      },
      select: {
        id: true,
        title: true,
        ingredients: true,
        instructions: true,
        ownerId: true,
        image: true,
        isExternalSrc: true,
        allowDelete: true,
        allowEdit: true,
        allowView: true,
      },
    });
  }

  public async addAllowEdit({ id, email }: UpdateAllowEditDto, user: User) {
    const recipe = await this.getRecipeById(id, true);
    const allowEditEmails = recipe.allowEdit?.split(',') ?? [];

    if (
      !this.authorizationService.canI({
        email: user.email,
        allowView: allowEditEmails,
        level: AuthorizationLevel.Edit,
        ownerEmail: recipe.owner.email,
      })
    ) {
      throw new UnauthorizedException();
    }

    return this.db.recipe.update({
      where: { id },
      data: {
        allowEdit: this.authorizationService
          .addEmailToAllowList({
            list: allowEditEmails,
            email,
          })
          .join(','),
      },
      select: {
        id: true,
        title: true,
        ingredients: true,
        instructions: true,
        ownerId: true,
        image: true,
        isExternalSrc: true,
        allowDelete: true,
        allowEdit: true,
        allowView: true,
      },
    });
  }

  public async addAllowDelete({ id, email }: UpdateAllowDeleteDto, user: User) {
    const recipe = await this.getRecipeById(id);
    const allowEditEmails = recipe.allowEdit?.split(',') ?? [];
    const allowDeleteEmails = recipe.allowDelete?.split(',') ?? [];

    if (
      !this.authorizationService.canI({
        email: user.email,
        allowEdit: allowEditEmails,
        level: AuthorizationLevel.Edit,
        ownerEmail: recipe.owner.email,
      })
    ) {
      throw new UnauthorizedException();
    }

    return this.db.recipe.update({
      where: { id },
      data: {
        allowDelete: this.authorizationService
          .addEmailToAllowList({
            list: allowDeleteEmails,
            email,
          })
          .join(','),
      },
      select: {
        id: true,
        title: true,
        ingredients: true,
        instructions: true,
        ownerId: true,
        image: true,
        isExternalSrc: true,
        allowDelete: true,
        allowEdit: true,
        allowView: true,
      },
    });
  }

  public async removeAllowView(
    { id, email }: UpdateAllowDeleteDto,
    user: User,
  ) {
    const recipe = await this.getRecipeById(id);
    const allowEditEmails = recipe.allowEdit?.split(',') ?? [];
    const allowViewEmails = recipe.allowView?.split(',') ?? [];

    if (
      !this.authorizationService.canI({
        email: user.email,
        allowEdit: allowEditEmails,
        level: AuthorizationLevel.Edit,
        ownerEmail: recipe.owner.email,
      })
    ) {
      throw new UnauthorizedException();
    }

    return this.db.recipe.update({
      where: { id },
      data: {
        allowView: this.authorizationService
          .removeEmailFromAllowList({
            list: allowViewEmails,
            email,
          })
          .join(','),
      },
      select: {
        id: true,
        title: true,
        ingredients: true,
        instructions: true,
        ownerId: true,
        image: true,
        isExternalSrc: true,
        allowDelete: true,
        allowEdit: true,
        allowView: true,
      },
    });
  }

  public async removeAllowEdit(
    { id, email }: UpdateAllowDeleteDto,
    user: User,
  ) {
    const recipe = await this.getRecipeById(id);
    const allowEditEmails = recipe.allowEdit?.split(',') ?? [];

    if (
      !this.authorizationService.canI({
        email: user.email,
        allowEdit: allowEditEmails,
        level: AuthorizationLevel.Edit,
        ownerEmail: recipe.owner.email,
      })
    ) {
      throw new UnauthorizedException();
    }

    return this.db.recipe.update({
      where: { id },
      data: {
        allowEdit: this.authorizationService
          .removeEmailFromAllowList({
            list: allowEditEmails,
            email,
          })
          .join(','),
      },
      select: {
        id: true,
        title: true,
        ingredients: true,
        instructions: true,
        ownerId: true,
        image: true,
        isExternalSrc: true,
        allowDelete: true,
        allowEdit: true,
        allowView: true,
      },
    });
  }

  public async removeAllowDelete(
    { id, email }: UpdateAllowDeleteDto,
    user: User,
  ) {
    const recipe = await this.getRecipeById(id);
    const allowEditEmails = recipe.allowEdit?.split(',') ?? [];
    const allowDeleteEmails = recipe.allowDelete?.split(',') ?? [];

    if (
      !this.authorizationService.canI({
        email: user.email,
        allowEdit: allowEditEmails,
        level: AuthorizationLevel.Edit,
        ownerEmail: recipe.owner.email,
      })
    ) {
      throw new UnauthorizedException();
    }

    return this.db.recipe.update({
      where: { id },
      data: {
        allowDelete: this.authorizationService
          .removeEmailFromAllowList({
            list: allowDeleteEmails,
            email,
          })
          .join(','),
      },
      select: {
        id: true,
        title: true,
        ingredients: true,
        instructions: true,
        ownerId: true,
        image: true,
        isExternalSrc: true,
        allowDelete: true,
        allowEdit: true,
        allowView: true,
      },
    });
  }

  public async deleteRecipe({ id }: DeleteRecipeDto) {
    return this.db.recipe.delete({ where: { id } });
  }

  public async deleteManyRecipes({ ids }: DeleteManyRecipeDto) {
    return Promise.all(
      ids.map((id) => this.db.recipe.delete({ where: { id } })),
    );
  }

  public async getRandomRecipes({
    amount = this.randomRecipesDefaultAmount,
  }: GetRandomRecipesDto) {
    return this.externalRecipeService.getMultipeRandomRecipes(amount);
  }
}
