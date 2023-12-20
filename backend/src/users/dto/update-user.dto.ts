import { InputType, OmitType, PartialType } from '@nestjs/graphql';

import { CreateUserDto } from './create-user.dto';

@InputType()
export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, [
    'created',
    'updated',
    'provider',
    'refreshToken',
    'token',
    'password',
  ]),
) {}
