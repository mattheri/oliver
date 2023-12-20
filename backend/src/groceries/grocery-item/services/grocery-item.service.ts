import { DatabaseService } from 'src/db/services/db.service';

import { Injectable } from '@nestjs/common';

import { CreateGroceryItemDto } from '../dto/create-grocery-item.dto';
import { DeleteGroceryItemDto } from '../dto/delete-grocery-item.dto';
import { GetGroceryItemByIdDto } from '../dto/get-grocery-item-by-id.dto';
import { GetGroceryItemByListIdDto } from '../dto/get-grocery-item-by-list-id.dto';
import { UpdateGroceryItemDto } from '../dto/update-grocery-item.dto';
import { GroceryItem } from '../models/grocery-item.model';

@Injectable()
export class GroceryItemService {
  constructor(private readonly db: DatabaseService) {}

  async getGroceryItemsByListId(
    input: GetGroceryItemByListIdDto,
  ): Promise<GroceryItem[]> {
    return this.db.item.findMany({
      where: {
        listId: input.listId,
      },
    });
  }

  async getGroceryItemById(input: GetGroceryItemByIdDto): Promise<GroceryItem> {
    return this.db.item.findUnique({ where: { id: input.id } });
  }

  async createGroceryItem(input: CreateGroceryItemDto): Promise<GroceryItem> {
    return this.db.item.create({
      data: {
        name: input.name,
        code: input.code,
        imageUrl: input.imageUrl,
        quantity: input.quantity,
        value: input.value,
        list: {
          connect: {
            id: input.listId,
          },
        },
      },
    });
  }

  async createGroceryItemBulk(
    input: CreateGroceryItemDto[],
  ): Promise<GroceryItem[]> {
    /**
     * TODO: SQLite doesn't support bulk inserts, so we need to do this manually.
     */
    return Promise.all(
      input.map((item) =>
        this.db.item.create({
          data: {
            name: item.name,
            code: item.code,
            imageUrl: item.imageUrl,
            quantity: item.quantity,
            value: item.value,
            list: {
              connect: {
                id: item.listId,
              },
            },
          },
        }),
      ),
    );
  }

  async updateGroceryItem(
    id: string,
    input: UpdateGroceryItemDto,
  ): Promise<GroceryItem> {
    return this.db.item.update({
      where: {
        id,
      },
      data: {
        name: input.name,
        code: input.code,
        imageUrl: input.imageUrl,
        quantity: input.quantity,
        value: input.value,
      },
    });
  }

  async updateGroceryItemBulk(
    input: UpdateGroceryItemDto[],
  ): Promise<GroceryItem[]> {
    /**
     * TODO: SQLite doesn't support bulk updates, so we need to do this manually.
     */
    return Promise.all(
      input.map((item) =>
        this.db.item.update({
          where: {
            id: item.id,
          },
          data: {
            name: item.name,
            code: item.code,
            imageUrl: item.imageUrl,
            quantity: item.quantity,
            value: item.value,
          },
        }),
      ),
    );
  }

  async deleteGroceryItem(input: DeleteGroceryItemDto): Promise<GroceryItem> {
    return this.db.item.delete({
      where: {
        id: input.id,
      },
    });
  }

  async deleteGroceryItemBulk(input: DeleteGroceryItemDto[]): Promise<void> {
    this.db.item.deleteMany({
      where: {
        id: {
          in: input.map((item) => item.id),
        },
      },
    });
  }
}
