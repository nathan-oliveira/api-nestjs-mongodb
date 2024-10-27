import { OmitType } from '@nestjs/swagger';
import { User } from 'src/users/schemas/user.schema';

export class ReadUserDto extends OmitType(User, []) {}
