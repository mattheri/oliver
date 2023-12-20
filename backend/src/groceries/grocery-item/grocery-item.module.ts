import { DatabaseService } from 'src/db/services/db.service';

import { Module } from '@nestjs/common';

import { GroceryItemResolver } from './resolvers/grocery-item.resolver';
import { GroceryItemService } from './services/grocery-item.service';

@Module({
  providers: [GroceryItemResolver, GroceryItemService, DatabaseService],
  exports: [GroceryItemService],
})
export class GroceryItemModule {}
