import { IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteGroceryItemDto {
  @Field()
  @IsString()
  id: string;
}
