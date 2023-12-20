import { DatabaseService } from 'src/db/services/db.service';

import { Injectable } from '@nestjs/common';

import { AddContainerItemDto } from '../dto/add-container-item.dto';
import { GetContainerItemByIdDto } from '../dto/get-container-item-by-id.dto';
import { UpdateContainerItemDto } from '../dto/update-container-item.dto';

@Injectable()
export class ContainerService {
  constructor(private readonly db: DatabaseService) {}

  async getContainerById(id: string) {
    return this.db.container.findUnique({ where: { id } });
  }

  async getContainersByUserEmail(email: string) {
    return this.db.container.findMany({ where: { owner: { email: email } } });
  }

  async getContainersByUserId(id: string) {
    return this.db.container.findMany({ where: { ownerId: id } });
  }

  async getContainerItemsByContainerId(id: string) {
    return this.db.containerItem.findMany({
      where: { containerId: id },
    });
  }

  async addContainerItem(input: AddContainerItemDto) {
    return this.db.containerItem.create({
      data: {
        ...input,
        quantity: Math.max(input.quantity, 1),
      },
    });
  }

  async updateContainerItem(input: UpdateContainerItemDto) {
    return this.db.containerItem.update({
      where: { id: input.id },
      data: {
        ...input,
        quantity: Math.max(input.quantity, 1),
      },
    });
  }

  async containerItemIsGroceryItem(input: GetContainerItemByIdDto) {
    const containerItemLinkedItemId = await this.db.containerItem.findUnique({
      where: { id: input.id },
      select: {
        linkedItemId: true,
      },
    });

    if (!containerItemLinkedItemId.linkedItemId) return null;

    return this.db.item.findUnique({
      where: { id: containerItemLinkedItemId.linkedItemId },
      include: {
        list: true,
      },
    });
  }
}
