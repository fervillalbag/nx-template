import { Injectable } from '@nestjs/common';

import { DbService } from '@nx-practice/api/data-access-db';
import {
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  UserCreateInput,
} from '@nx-practice/api/generated/db-types';

@Injectable()
export class UserService {
  constructor(private db: DbService) {}

  create(createUserInput: UserCreateInput) {
    return this.db.user.create({ data: createUserInput });
  }

  findAll() {
    return this.db.user.findMany();
  }

  findOne(findUserArgs: FindUniqueUserArgs) {
    return this.db.user.findUnique(findUserArgs);
  }

  update(updateUserInput: UpdateOneUserArgs) {
    return this.db.user.update(updateUserInput);
  }

  remove(removeUserArgs: FindUniqueUserArgs) {
    return this.db.user.delete(removeUserArgs);
  }
}
