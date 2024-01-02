import { Image } from 'src/image/models/image.model';

import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field(() => [String])
  ingredients: string[];

  @Field(() => [String])
  instructions: string[];

  @Field(() => Int, { nullable: true })
  servings?: number;

  @Field(() => Int, { nullable: true })
  prepTime?: number;

  @Field(() => Int, { nullable: true })
  cookTime?: number;

  @Field()
  userId: string;

  @Field(() => Image, { nullable: true })
  image?: Image;

  @Field({ nullable: true })
  isExternalSrc?: boolean;

  @Field({ nullable: true })
  url?: string;

  @Field(() => [String], { nullable: true })
  allowView?: string[];

  @Field(() => [String], { nullable: true })
  allowEdit?: string[];

  @Field(() => [String], { nullable: true })
  allowDelete?: string[];

  @Field({ defaultValue: false, nullable: true })
  isWishList?: boolean;
}
