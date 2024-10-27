import { OmitType } from '@nestjs/swagger';
import { Post } from 'src/posts/schemas/post.schema';

export class ReadPostDto extends OmitType(Post, []) {}
