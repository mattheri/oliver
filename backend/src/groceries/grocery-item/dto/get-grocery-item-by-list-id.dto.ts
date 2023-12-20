import { IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetGroceryItemByListIdDto {
  @Field()
  @IsString()
  listId: string;
}
