import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  FindUniqueUserArgs,
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

  @Query(() => [User])
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User)
  findOne(@Args() findUserArgs: FindUniqueUserArgs) {
    return this.userService.findOne(findUserArgs);
  }

  @Mutation(() => User)
  updateUser(@Args() updateUserInput: UpdateOneUserArgs) {
    return this.userService.update(updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args() removeUserArgs: FindUniqueUserArgs) {
    return this.userService.remove(removeUserArgs);
  }
}
