import { IsInt, IsOptional, Max, Min } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetRandomRecipesDto {
  @Field({ nullable: true, defaultValue: 10 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(25)
  amount?: number;
}
