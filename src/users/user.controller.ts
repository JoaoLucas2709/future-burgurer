import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.findUserById(id);
  }

  @Put(':id')
  async updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string): Promise<User> {
    return this.usersService.updateUser(updateUserDto, id);
  }
  
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return this.usersService.deleteUser(id);
  }
}