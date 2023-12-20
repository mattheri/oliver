import { Field, ID, ObjectType } from '@nestjs/graphql';

import { BoxCategory } from './container-category.model';
import { ContainerItem } from './container-item';

@ObjectType()
export class Box {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  main?: boolean;

  @Field(() => BoxCategory)
  category: BoxCategory;

  @Field()
  created: Date;

  @Field()
  updated: Date;

  @Field(() => [String])
  allowView: string[];

  @Field(() => [String])
  allowEdit: string[];

  @Field(() => [String])
  allowDelete: string[];

  @Field(() => ID)
  owner: string;

  @Field(() => [ContainerItem])
  items: ContainerItem[];
}
