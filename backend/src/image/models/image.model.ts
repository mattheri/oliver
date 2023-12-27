import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Image {
  @Field()
  src: string;

  @Field({ nullable: true })
  width?: number;

  @Field({ nullable: true })
  height?: number;

  @Field({ nullable: true })
  alt?: string;
}
