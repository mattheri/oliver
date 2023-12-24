import { ThrottlerModuleOptions, ThrottlerOptionsFactory } from '@nestjs/throttler';
export declare class ThrottlerService implements ThrottlerOptionsFactory {
    private readonly ttl;
    private readonly limit;
    createThrottlerOptions(): ThrottlerModuleOptions | Promise<ThrottlerModuleOptions>;
}
