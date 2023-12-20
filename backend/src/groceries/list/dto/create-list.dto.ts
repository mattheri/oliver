import { IsEmail, IsOptional, IsString } from 'class-validator';
import { GroceryItem } from 'src/groceries/grocery-item/models/grocery-item.model';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateListDto {
  @Field()
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field()
  @IsString()
  owner: string;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  items: GroceryItem[];

  @Field(() => [String], { nullable: true, defaultValue: [] })
  @IsEmail({}, { each: true })
  allowEdit?: string[];

  @Field(() => [String], { nullable: true, defaultValue: [] })
  @IsEmail({}, { each: true })
  allowView?: string[];

  @Field(() => [String], { nullable: true, defaultValue: [] })
  @IsEmail({}, { each: true })
  allowDelete?: string[];
}
