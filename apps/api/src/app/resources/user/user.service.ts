import { Injectable } from '@nestjs/common';

import { DbService } from '@nx-practice/api/data-access-db';
import {
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

  findOne(id: number) {
    return this.db.user.findFirst({ where: { id } });
  }

  update(updateUserInput: UpdateOneUserArgs) {
    return this.db.user.update(updateUserInput);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
