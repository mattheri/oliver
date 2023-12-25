import { IsInt, IsOptional, Max, Min } from 'class-validator';

import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GetRandomRecipesDto {
  @Field(() => Int, { nullable: true, defaultValue: 10 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(25)
  amount?: number;
}
