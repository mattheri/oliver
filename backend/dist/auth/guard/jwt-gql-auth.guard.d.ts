import { ExecutionContext } from '@nestjs/common';
declare const JwtGqlAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtGqlAuthGuard extends JwtGqlAuthGuard_base {
    getRequest(context: ExecutionContext): any;
}
export {};
