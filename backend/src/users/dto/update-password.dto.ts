import { IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdatePasswordDto {
  @Field()
  @IsString()
  currentPassword: string;

  @Field()
  @IsString()
  newPassword: string;
}
