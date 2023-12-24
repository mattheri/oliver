import { IsEmail, IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateAllowEditDto {
  @Field()
  @IsString()
  id: string;

  @Field()
  @IsEmail()
  email: string;
}
