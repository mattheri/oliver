import { IsInt, IsOptional, IsString, Min } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ImageDto {
  @Field()
  src: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  @Min(0)
  width?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  @Min(0)
  height?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  alt?: string;
}
