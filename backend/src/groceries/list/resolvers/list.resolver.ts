import {
  Query,
  Resolver,
  Args,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

import { List, ListWithoutItems } from '../models/list.model';
import { ListService } from '../services/list.service';
import { AddReadonlyUserListDto } from '../dto/add-readonly-user-list.dto';
import { CreateListDto } from '../dto/create-list.dto';
import { GroceryItemService } from 'src/groceries/grocery-item/services/grocery-item.service';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from '@prisma/client';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtGqlAuthGuard } from 'src/auth/guard/jwt-gql-auth.guard';
import { GetListByIdDto } from '../dto/get-list-by-id.dto';

@Resolver(() => List)
export class ListResolver {
  constructor(
    private readonly listService: ListService,
    private readonly groceryItemService: GroceryItemService,
  ) {}

  @Query(() => List)
  @UseGuards(JwtGqlAuthGuard)
  async list(@Args('input') input: GetListByIdDto): Promise<ListWithoutItems> {
    return this.listService.getListById(input.id);
  }

  @Query(() => [List])
  @UseGuards(JwtGqlAuthGuard)
  async lists(@CurrentUser() user?: User): Promise<ListWithoutItems[]> {
    if (!user) throw new UnauthorizedException();

    return this.listService.getListsByUserId(user.id);
  }

  @Mutation(() => List)
  @UseGuards(JwtGqlAuthGuard)
  async createList(
    @Args('input') input: CreateListDto,
    @CurrentUser() user: User,
  ): Promise<List> {
    return this.listService.createList(input, user);
  }

  @Mutation(() => List)
  @UseGuards(JwtGqlAuthGuard)
  async addReadOnlyUserToList(
    @Args('input') input: AddReadonlyUserListDto,
  ): Promise<ListWithoutItems> {
    return this.listService.addReadOnlyUserToList(input);
  }

  @ResolveField()
  async items(@Parent() list: List) {
    return this.groceryItemService.getGroceryItemsByListId({ listId: list.id });
  }
}
