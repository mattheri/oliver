import { IsInt, IsOptional, IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateGroceryItemDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  value: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  code?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @Field(() => Number)
  @IsInt()
  quantity: number;

  @Field()
  @IsString()
  listId: string;
}
