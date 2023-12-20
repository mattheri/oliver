import { DatabaseService } from 'src/db/services/db.service';
import { GroceryItem } from 'src/groceries/grocery-item/models/grocery-item.model';

import { HttpException, Injectable } from '@nestjs/common';
import { List as DbList, Item, User } from '@prisma/client';

import { AddReadonlyUserListDto } from '../dto/add-readonly-user-list.dto';
import { CreateListDto } from '../dto/create-list.dto';
import { List, ListWithoutItems } from '../models/list.model';

@Injectable()
export class ListService {
  constructor(private readonly db: DatabaseService) {}

  private dbItemToModel(item: Item): GroceryItem {
    return {
      id: item.id,
      value: item.value,
      code: item.code,
      quantity: item.quantity,
      imageUrl: item.imageUrl,
      listId: item.listId,
    };
  }

  private dbListWithoutItemsToModel(list: DbList): ListWithoutItems {
    const listModel = {
      allowDelete: list.allowDelete.split(','),
      allowEdit: list.allowEdit.split(','),
      allowView: list.allowView.split(','),
      created: list.created,
      description: list.description,
      id: list.id,
      name: list.name,
      owner: list.ownerId,
      updated: list.updated,
    };

    return listModel;
  }

  private dbListToModel(list: DbList & { items?: Item[] }): List {
    const listModel = this.dbListWithoutItemsToModel(list);

    return {
      ...listModel,
      items: list.items?.map(this.dbItemToModel.bind(this)) || [],
    };
  }

  async getListById(id: string): Promise<ListWithoutItems> {
    const list = await this.db.list.findUnique({ where: { id } });

    if (!list) {
      throw new HttpException('List not found', 404);
    }

    return this.dbListWithoutItemsToModel(list);
  }

  async getListsByUserId(userId: string): Promise<ListWithoutItems[]> {
    const lists = await this.db.list.findMany({ where: { ownerId: userId } });

    return lists.map(this.dbListWithoutItemsToModel.bind(this));
  }

  async createList(input: CreateListDto, user?: User): Promise<List> {
    const createdList = await this.db.list.create({
      data: {
        allowDelete: user.id,
        allowEdit: user.id,
        allowView: user.id,
        description: input.description,
        name: input.name,
        owner: {
          connect: user,
        },
        items: {
          connectOrCreate: input.items.map((item) => ({
            where: {
              id: item.id,
            },
            create: {
              code: item.code,
              name: item.value,
              value: item.value,
              quantity: item.quantity,
              imageUrl: item.imageUrl,
            },
          })),
        },
      },
      include: {
        items: !!input.items && input.items.length > 0,
        owner: true,
      },
    });

    return this.dbListToModel(createdList);
  }

  async addReadOnlyUserToList(
    input: AddReadonlyUserListDto,
  ): Promise<Omit<List, 'items'>> {
    try {
      const list = await this.db.list.findUnique({
        where: { id: input.listId },
      });

      if (!list || !list.allowEdit.includes(input.email)) {
        throw new Error('You do not have permission to add users to this list');
      }

      const updatedList = await this.db.list.update({
        where: { id: input.listId },
        data: {
          allowView: [...list.allowView].join(','),
        },
      });

      return this.dbListWithoutItemsToModel(updatedList);
    } catch (e) {
      throw new HttpException(e.message, 403);
    }
  }

  async addManyReadOnlyUsersToList(
    input: AddReadonlyUserListDto[],
    user?: User,
  ): Promise<Omit<List, 'items'>> {
    try {
      const list = await this.db.list.findUnique({
        where: { id: input[0].listId },
      });

      if (!list || list.ownerId !== user.id) {
        throw new Error('You do not have permission to add users to this list');
      }

      const updatedList = await this.db.list.update({
        where: { id: input[0].listId },
        data: {
          allowView: [...list.allowView, input[0].email].join(','),
        },
      });

      return this.dbListWithoutItemsToModel(updatedList);
    } catch (e) {
      throw new HttpException(e.message, 403);
    }
  }
}
