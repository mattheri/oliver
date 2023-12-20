import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GroceryItem {
  @Field()
  id: string;

  @Field({ nullable: true })
  code?: number;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field()
  value: string;

  @Field(() => Int)
  quantity: number;

  @Field()
  listId: string;
}
