import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';

import { ParamObjectId } from 'src/common/decorators/param-id.decorator';

import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { ReadUserDto } from './dto/read-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<ReadUserDto> {
    return plainToClass(
      ReadUserDto,
      await this.usersService.createUser(createUserDto),
    );
  }

  @Get()
  async getUsers(): Promise<ReadUserDto[]> {
    const users = await this.usersService.getsUsers();
    return users.map((user) => plainToClass(ReadUserDto, user));
  }

  @Get(':id')
  async getUserById(@ParamObjectId('id') id: string): Promise<ReadUserDto> {
    return plainToClass(ReadUserDto, await this.usersService.getUserById(id));
  }

  @Patch(':id')
  async updateUser(
    @ParamObjectId('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<ReadUserDto> {
    return plainToClass(
      ReadUserDto,
      await this.usersService.updateUser(id, updateUserDto),
    );
  }

  @Delete(':id')
  async deleteUser(@ParamObjectId('id') id: string): Promise<void> {
    await this.usersService.deleteUser(id);
  }
}
