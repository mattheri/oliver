import { Module } from '@nestjs/common';

import { GroceryItemModule } from './grocery-item/grocery-item.module';
import { ListModule } from './list/list.module';
import { UpcModule } from './upc/upc.module';

@Module({
  imports: [ListModule, GroceryItemModule, UpcModule],
})
export class GroceriesModule {}
