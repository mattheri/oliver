import { DatabaseService } from 'src/db/services/db.service';

import { Module } from '@nestjs/common';

import { UserResolver } from './resolvers/user.resolver';
import { HashService } from './services/hash.service';
import { UserService } from './services/user.service';

@Module({
  providers: [UserService, DatabaseService, HashService, UserResolver],
  exports: [UserService, HashService],
})
export class UsersModule {}
