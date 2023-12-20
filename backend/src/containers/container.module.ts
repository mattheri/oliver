import { DatabaseService } from 'src/db/services/db.service';

import { Module } from '@nestjs/common';

@Module({
  providers: [DatabaseService],
})
export class ContainerModule {}
