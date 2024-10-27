import { Document } from 'mongoose';

import { Prop } from '@nestjs/mongoose';

export class BaseSchema {
  _id: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date })
  removedAt?: Date;
}

export type BaseDocument = BaseSchema & Document;
