import { registerEnumType } from '@nestjs/graphql';

export enum BoxCategory {
  FREEZER = 'FREEZER',
  REFRIGERATOR = 'REFRIGERATOR',
  PANTRY = 'PANTRY',
  OTHER = 'OTHER',
}

registerEnumType(BoxCategory, {
  name: 'BoxCategory',
});
