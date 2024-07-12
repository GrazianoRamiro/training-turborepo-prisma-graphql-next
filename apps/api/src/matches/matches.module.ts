import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesResolver } from './matches.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [MatchesService, MatchesResolver],
})
export class MatchesModule {}
