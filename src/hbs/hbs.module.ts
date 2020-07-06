import { Module } from '@nestjs/common';
import { HbsController } from './hbs.controller';

@Module({
  controllers: [HbsController],
})
export class HbsModule {}
