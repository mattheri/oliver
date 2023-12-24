import { IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteManyRecipeDto {
  @Field(() => [String])
  @IsString({ each: true })
  ids: string[];
}
