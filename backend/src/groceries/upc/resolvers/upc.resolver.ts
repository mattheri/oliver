import { Resolver, Query, Args } from '@nestjs/graphql';
import { Item } from '../models/item.model';
import { UpcService } from '../services/upc.service';
import { ItemByUpcDto } from '../dto/item-by-upc.dto';

@Resolver(() => Item)
export class UpcResolver {
  constructor(private upcService: UpcService) {}

  @Query(() => Item, { nullable: true })
  async itemByUpc(@Args('input') input: ItemByUpcDto) {
    return this.upcService.getUpc(input.code);
  }
}
