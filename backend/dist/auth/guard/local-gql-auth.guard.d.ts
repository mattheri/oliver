import { ExecutionContext } from '@nestjs/common';
declare const LocalGqlAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class LocalGqlAuthGuard extends LocalGqlAuthGuard_base {
    constructor();
    getRequest(context: ExecutionContext): any;
}
export {};
