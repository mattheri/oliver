import { IsInt, IsOptional, IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRecipeImageDto {
  @Field()
  @IsOptional()
  @IsString()
  id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  width?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  height?: number;

  @Field()
  @IsString()
  src: string;
}
