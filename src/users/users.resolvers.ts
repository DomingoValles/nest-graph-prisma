import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { NewUser, UpdateUser } from 'src/graphql';
import { UsersService } from './users.service';

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
  async create(@Args('input') args: NewUser) {
    return this.usersService.create(args);
  }

  @Mutation('updateUser')
  async update(@Args('input') args: UpdateUser) {
    return this.usersService.update(args);
  }

  @Mutation('deleteUser')
  async delete(@Args('id') args: string) {
    return this.usersService.delete(args);
  }
}
