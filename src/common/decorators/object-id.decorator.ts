import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

import { isValidObjectId } from 'mongoose';

export const IsValidObjectId = (validationOptions?: ValidationOptions) => {
  return function (object: NonNullable<object>, propertyName: string): void {
    registerDecorator({
      name: 'isNotNaN',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          // , _args: ValidationArguments
          return !isValidObjectId(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property}: Invalid ObjectId format`;
        },
      },
    });
  };
};
