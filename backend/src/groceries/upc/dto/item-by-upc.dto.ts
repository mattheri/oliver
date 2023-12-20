import { IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ItemByUpcDto {
  @Field()
  @IsString()
  code: string;
}
