import { Module } from '@nestjs/common';
import { MatchEventsService } from './match-events.service';
import { MatchEventsResolver } from './match-events.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [MatchEventsService, MatchEventsResolver],
})
export class MatchEventsModule {}
