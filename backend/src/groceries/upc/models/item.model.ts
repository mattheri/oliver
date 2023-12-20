import { Field, ObjectType } from '@nestjs/graphql';

import { Category } from './category.model';
import { Spec } from './spec.model';

@ObjectType()
export class Item {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  brand: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  image?: string;

  @Field(() => [Spec])
  specs: Spec[];

  @Field(() => Category)
  category: Category;

  @Field({ nullable: true })
  codeUrl?: string;
}
