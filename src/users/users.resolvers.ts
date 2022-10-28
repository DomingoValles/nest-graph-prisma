import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUser } from './dto/createUser.dto';
import { EditUser } from './dto/editUser.dto';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(AuthGuard)
@Resolver('Users')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query('user')
  async getUser(@Args('id') id: string) {
    return this.usersService.getById(id);
  }

  @Query('users')
  async getUsers() {
    return this.usersService.getAll();
  }

  @Mutation('createUser')
  async create(@Args('input') args: CreateUser) {
    return this.usersService.create(args);
  }

  @Mutation('updateUser')
  async update(@Args('input') args: EditUser) {
    return this.usersService.update(args);
  }

  @Mutation('deleteUser')
  async delete(@Args('id') args: string) {
    return this.usersService.delete(args);
  }
}
