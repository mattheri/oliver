import { IsEmail } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindUserByEmailDto {
  @Field()
  @IsEmail()
  email: string;
}
