import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import { BaseSchema, BaseDocument } from 'src/common/base/base.schema';
import { UserSettings } from './user-settings.schema';
import { Post } from 'src/posts/schemas/post.schema';

@Schema()
export class User extends BaseSchema {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: false })
  displayName?: false;

  @Prop({ required: false })
  avatarUrl?: string;

  @Prop({ type: Types.ObjectId, ref: UserSettings.name })
  settings?: UserSettings;

  @Prop({ type: [{ type: Types.ObjectId, ref: Post.name }] })
  posts?: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & BaseDocument;
