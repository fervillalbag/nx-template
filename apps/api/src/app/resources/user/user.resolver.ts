import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import {
  UpdateOneUserArgs,
  User,
  UserCreateInput,
} from '@nx-practice/api/generated/db-types';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') userCreateInput: UserCreateInput) {
    return this.userService.create(userCreateInput);
  }

  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args() updateUserInput: UpdateOneUserArgs) {
    return this.userService.update(updateUserInput);
  }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.userService.remove(id);
  // }
}
