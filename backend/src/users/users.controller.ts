import {
  Controller,
  NotFoundException,
  Param,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Status, User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login/:username')
  async login(@Param('username') username: string): Promise<User> {
    const user = await this.usersService.findByUsername(username);

    if (!user) {
      throw new NotFoundException(`The user - ${username} - not found`);
    }

    if (user.status === Status.DELETED) {
      throw new UnauthorizedException('Deleted');
    }

    return user;
  }
}
