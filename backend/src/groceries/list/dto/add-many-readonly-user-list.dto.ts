import { IsEmail, IsString } from 'class-validator';

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class AddManyReadonlyUserListDto {
  @Field(() => ID)
  @IsString()
  listId: string;

  @Field(() => [String])
  @IsEmail({}, { each: true })
  emails: string[];
}
