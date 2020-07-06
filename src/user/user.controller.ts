import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<Array<User>> {
    return this.userService.findAll();
  }

  @Post()
  addUser(@Body() body: User) {
    return this.userService.addUser(body);
  }
}
