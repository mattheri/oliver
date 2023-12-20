import { IsInt, IsOptional, IsString } from 'class-validator';

import { Field, InputType, PartialType } from '@nestjs/graphql';

import { CreateGroceryItemDto } from './create-grocery-item.dto';

@InputType()
export class UpdateGroceryItemDto extends PartialType(CreateGroceryItemDto) {
  @Field()
  @IsString()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  value?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  code?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  quantity?: number;
}
