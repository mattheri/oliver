import { Field, ObjectType } from '@nestjs/graphql';

import { RecipeImage } from './recipe-image.model';

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

  @Field()
  userId: string;

  @Field(() => RecipeImage, { nullable: true })
  image?: RecipeImage;

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
}
