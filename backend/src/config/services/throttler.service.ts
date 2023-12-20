import { Injectable } from '@nestjs/common';
import {
  ThrottlerModuleOptions,
  ThrottlerOptionsFactory,
} from '@nestjs/throttler';

@Injectable()
export class ThrottlerService implements ThrottlerOptionsFactory {
  private readonly ttl = Number(process.env.THROTTLE_TTL) || 60000;
  private readonly limit = Number(process.env.THROTTLE_LIMIT) || 10;

  createThrottlerOptions():
    | ThrottlerModuleOptions
    | Promise<ThrottlerModuleOptions> {
    return {
      throttlers: [
        {
          ttl: this.ttl,
          limit: this.limit,
        },
      ],
    };
  }
}
