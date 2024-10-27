import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

import { IsValidObjectId } from 'src/common/decorators/object-id.decorator';

export class CreatePostDto {
  @ApiProperty({
    type: String,
    description: 'Title to post',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title: string;

  @ApiProperty({
    type: String,
    description: 'Contents to post',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  contents: string;

  @IsString()
  @IsNotEmpty()
  @IsValidObjectId()
  userId: string;
}
