import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { BaseSchema, BaseDocument } from 'src/common/base/base.schema';

@Schema()
export class Post extends BaseSchema {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  contents: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
export type PostDocument = Post & BaseDocument;
