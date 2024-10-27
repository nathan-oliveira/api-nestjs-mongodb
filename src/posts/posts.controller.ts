import {
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor,
  Post,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreatePostDto } from './dto/create-post.dto';

import { PostsService } from './posts.service';
import { plainToClass } from 'class-transformer';
import { ReadPostDto } from './dto/read-post.dto';

@ApiTags('Posts')
@Controller('posts')
@UseInterceptors(ClassSerializerInterceptor)
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto): Promise<ReadPostDto> {
    return plainToClass(
      ReadPostDto,
      await this.postsService.createPost(createPostDto),
    );
  }
}
