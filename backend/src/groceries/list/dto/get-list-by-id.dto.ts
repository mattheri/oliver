import { IsString } from 'class-validator';

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetListByIdDto {
  @Field(() => ID)
  @IsString()
  id: string;
}
