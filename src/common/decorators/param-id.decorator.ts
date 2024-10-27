import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

import { isValidObjectId } from 'mongoose';

export const ParamObjectId = createParamDecorator(
  (name: string, context: ExecutionContext) => {
    const param = context.switchToHttp().getRequest().params[name];
    if (!isValidObjectId(param))
      throw new BadRequestException('Invalid ObjectId format');
    return param;
  },
);
