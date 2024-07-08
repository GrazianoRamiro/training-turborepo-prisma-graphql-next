import { Module } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { LeaguesResolver } from './leagues.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [LeaguesService, LeaguesResolver],
})
export class LeaguesModule {}
