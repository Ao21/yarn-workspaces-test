import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsResolver } from './cats.resolver';

@Module({
  controllers: [CatsController],
  providers: [CatsResolver]
})
export class CatsModule {}
