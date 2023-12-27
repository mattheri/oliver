import { Field, ObjectType } from '@nestjs/graphql';

import { ImageSize } from './image-size.model';

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

  @Field(() => [ImageSize], { nullable: true })
  sizes?: ImageSize[];
}
