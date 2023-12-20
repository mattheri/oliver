import {
  IsDate,
  IsEmail,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

import { IsProvider } from '../decorators/is-provider.decorator';
import { Provider as IProvider } from '../interfaces/user.interfaces';
import { Provider } from '../users.constants';

@InputType()
export class CreateUserDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  name?: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsProvider({
    message: `Currently supported providers: ${Object.values(Provider)
      .filter((v) => typeof v === 'string')
      .join(', ')}`,
  })
  provider: IProvider;

  @Field({ nullable: true })
  @IsOptional()
  @ValidateIf((o) => o.provider === Provider.Local)
  @IsString({ message: 'Error with password' })
  password?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  refreshToken?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  token?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  created?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  updated?: Date;
}
