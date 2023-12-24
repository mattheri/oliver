import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RecipeImage {
  @Field()
  id: string;

  @Field(() => Int, { nullable: true })
  width?: number;

  @Field(() => Int, { nullable: true })
  height?: number;

  @Field()
  src: string;
}
