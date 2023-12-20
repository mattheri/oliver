import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalGqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const {
      input: { email, password },
    } = ctx.getArgs();

    const req = ctx.getContext().req;
    req.body.email = email;
    req.body.password = password;

    return req;
  }
}
