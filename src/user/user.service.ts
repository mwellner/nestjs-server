import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<Array<User>> {
    return this.userRepository.find();
  }

  async addUser(user: User): Promise<User> {
    const newUser = await this.userRepository.save(user);
    return newUser;
  }
}
