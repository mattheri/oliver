import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ImageSize {
  @Field({ nullable: true })
  width?: number;

  @Field({ nullable: true })
  height?: number;

  @Field()
  src: string;
}
