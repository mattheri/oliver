import { IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteRecipeDto {
  @Field()
  @IsString()
  id: string;
}
