import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { UseGuards } from '@nestjs/common';
import { JwtGqlAuthGuard } from 'src/auth/guard/jwt-gql-auth.guard';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserService } from '../services/user.service';
import { CurrentUser } from '../decorators/current-user.decorator';
import { UpdatePasswordDto } from '../dto/update-password.dto';

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
}
