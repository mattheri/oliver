import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Provider } from './provider.model';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field()
  email: string;

  @Field(() => Provider)
  provider: Provider;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  refreshToken?: string;

  @Field()
  accessToken: string;

  @Field({ nullable: true })
  created?: Date;

  @Field({ nullable: true })
  updated?: Date;
}
