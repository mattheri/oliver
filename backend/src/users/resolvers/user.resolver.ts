import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { UseGuards } from '@nestjs/common';
import { JwtGqlAuthGuard } from 'src/auth/guard/jwt-gql-auth.guard';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserService } from '../services/user.service';
import { CurrentUser } from '../decorators/current-user.decorator';
import { UpdatePasswordDto } from '../dto/update-password.dto';
import { FindUserByEmailDto } from '../dto/find-user-by-email.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  @UseGuards(JwtGqlAuthGuard)
  async updateUser(
    @Args('input') input: UpdateUserDto,
    @CurrentUser() user: User,
  ) {
    return this.userService.updateUser(user.id, input);
  }

  @Mutation(() => User)
  @UseGuards(JwtGqlAuthGuard)
  async updatePassword(
    @Args('input') input: UpdatePasswordDto,
    @CurrentUser() user: User,
  ) {
    return this.userService.updatePassword(
      user.id,
      input.currentPassword,
      input.newPassword,
    );
  }

  @Query(() => User, { nullable: true })
  async user(@Args('input') input: FindUserByEmailDto) {
    return this.userService.findUserByEmail(input);
  }
}
