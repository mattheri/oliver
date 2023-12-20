import { ValidationOptions, registerDecorator } from 'class-validator';

import { Provider } from '../users.constants';

export function IsProvider(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isProvider',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          const regex = new RegExp(
            `^${Object.values(Provider)
              .filter((v) => typeof v === 'string')
              .join('|')}$`,
            'i',
          );
          return regex.test(value);
        },
      },
    });
  };
}
