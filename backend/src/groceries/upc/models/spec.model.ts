import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Spec {
  @Field()
  name: string;

  @Field()
  value: string;
}
