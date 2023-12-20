import { Module } from '@nestjs/common';

import { UpcResolver } from './resolvers/upc.resolver';
import { UpcService } from './services/upc.service';

@Module({
  providers: [UpcResolver, UpcService],
  exports: [UpcService],
})
export class UpcModule {}
