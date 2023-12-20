import { IsOptional, IsString } from 'class-validator';
import { CreateGroceryItemDto } from 'src/groceries/grocery-item/dto/create-grocery-item.dto';

import { Field, ID, InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class AddContainerItemDto extends PartialType(
  OmitType(CreateGroceryItemDto, ['listId', 'name']),
) {
  @Field(() => ID)
  @IsString()
  containerId: string;

  @Field()
  @IsString()
  name: string;

  @Field(() => ID, { nullable: true })
  @IsString()
  @IsOptional()
  linkedItemId?: string;
}
