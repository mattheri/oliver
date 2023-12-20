import { IsEmail, IsString } from 'class-validator';

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class AddReadonlyUserListDto {
  @Field(() => ID)
  @IsString()
  listId: string;

  @Field()
  @IsEmail()
  email: string;
}
