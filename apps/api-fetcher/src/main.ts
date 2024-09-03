import { leaguesService } from './services/leagues.service';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

async function init() {
  const apiResponse = await leaguesService.fetchLeagues(true);
  await leaguesService.storeLeagues(apiResponse);
}

init();
