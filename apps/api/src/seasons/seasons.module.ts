import { Module } from '@nestjs/common';
import { SeasonsService } from './seasons.service';
import { SeasonsResolver } from './seasons.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [SeasonsService, SeasonsResolver],
})
export class SeasonsModule {}
