import { IsOptional, IsString } from 'class-validator';
import { CreateGroceryItemDto } from 'src/groceries/grocery-item/dto/create-grocery-item.dto';

import { Field, ID, InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContainerItemDto extends PartialType(
  OmitType(CreateGroceryItemDto, ['listId']),
) {
  @Field(() => ID)
  @IsString()
  id: string;

  @Field(() => ID, { nullable: true })
  @IsString()
  @IsOptional()
  linkedItemId?: string;
}
