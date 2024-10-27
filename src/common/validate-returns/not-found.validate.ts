import { HttpStatus, HttpException } from '@nestjs/common';

interface IValidate {
  message: string;
}

export const notFoundValidateReturn = (
  data: any,
  { message }: IValidate = null,
) => {
  if (!data)
    throw new HttpException(
      message ?? 'register not found',
      HttpStatus.NOT_FOUND,
    );

  return data;
};
