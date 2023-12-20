import { DatabaseService } from 'src/db/services/db.service';

import { Module } from '@nestjs/common';

import { GroceryItemModule } from '../grocery-item/grocery-item.module';
import { ListResolver } from './resolvers/list.resolver';
import { ListService } from './services/list.service';

@Module({
  providers: [ListResolver, ListService, DatabaseService],
  exports: [ListService],
  imports: [GroceryItemModule],
})
export class ListModule {}
