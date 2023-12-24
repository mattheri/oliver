import { IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetRecipeByIdDto {
  @Field()
  @IsString()
  id: string;
}
