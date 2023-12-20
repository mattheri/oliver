import { IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetGroceryItemByIdDto {
  @Field()
  @IsString()
  id: string;
}
