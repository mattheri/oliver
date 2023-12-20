import { IsString } from 'class-validator';

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetContainerItemByIdDto {
  @Field(() => ID)
  @IsString()
  id: string;
}
