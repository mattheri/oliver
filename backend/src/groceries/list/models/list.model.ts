import { Field, ID, ObjectType, OmitType } from '@nestjs/graphql';

import { GroceryItem } from '../../grocery-item/models/grocery-item.model';

@ObjectType()
export class List {
  @Field(() => ID)
  id: string;

  @Field(() => [String])
  allowEdit: string[];

  @Field(() => [String])
  allowView: string[];

  @Field(() => [String])
  allowDelete: string[];

  @Field(() => ID)
  owner: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  created: Date;

  @Field()
  updated: Date;

  @Field(() => [GroceryItem])
  items: GroceryItem[];
}

export class ListWithoutItems extends OmitType(List, ['items'] as const) {}
