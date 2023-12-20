import { registerEnumType } from '@nestjs/graphql';

export enum Provider {
  LOCAL = 'LOCAL',
  FACEBOOK = 'FACEBOOK',
  GOOGLE = 'GOOGLE',
}

registerEnumType(Provider, {
  name: 'Provider',
});
