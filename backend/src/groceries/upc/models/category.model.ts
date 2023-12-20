import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field()
  mainCategory: string;

  @Field(() => [String])
  categories: string[];
}
