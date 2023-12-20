import { GroceryItem } from 'src/groceries/grocery-item/models/grocery-item.model';

import { Field, ObjectType, OmitType } from '@nestjs/graphql';

@ObjectType()
export class ContainerItem extends OmitType(GroceryItem, [
  'quantity',
  'listId',
  'id',
]) {
  @Field()
  id: string;

  @Field()
  quantity: number;
}
