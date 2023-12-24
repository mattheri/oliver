import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RecipeCategory {
  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  image: string;
}
