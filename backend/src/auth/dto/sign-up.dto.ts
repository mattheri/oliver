import { IsString } from 'class-validator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

import {
  Field,
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
} from '@nestjs/graphql';

import { Match } from '../decorators/match.decorator';
import { LoginDto } from './login.dto';

@InputType()
export class SignUpDto extends IntersectionType(
  LoginDto,
  PartialType(OmitType(CreateUserDto, ['email'])),
) {
  @Field()
  @IsString()
  @Match('password', { message: 'Passwords do not match' })
  passwordCheck: string;
}
