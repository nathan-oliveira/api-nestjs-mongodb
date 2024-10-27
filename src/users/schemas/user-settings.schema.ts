import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { BaseDocument, BaseSchema } from 'src/common/base/base.schema';

@Schema()
export class UserSettings extends BaseSchema {
  @Prop({ required: false })
  receiveNotifications?: boolean;

  @Prop({ required: false })
  receiveEmails?: boolean;

  @Prop({ required: false })
  receiveSMS?: boolean;
}

export const UserSettingsSchema = SchemaFactory.createForClass(UserSettings);
export type UserSettingsDocument = UserSettings & BaseDocument;
