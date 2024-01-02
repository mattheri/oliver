import { IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetExternalRecipeByIdDto {
  @Field()
  @IsString()
  id: string;
}
