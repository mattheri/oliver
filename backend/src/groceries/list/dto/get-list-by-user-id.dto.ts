import { IsString } from 'class-validator';

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetListByUserIdDto {
  @Field(() => ID)
  @IsString()
  userId: string;
}
