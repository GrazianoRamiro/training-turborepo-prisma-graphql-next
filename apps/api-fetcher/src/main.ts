import * as dotenv from 'dotenv';
import path from 'path';

if (process.env.CI) {
  dotenv.config({
    path: path.resolve(__dirname, '../../../.env.vault'),
  });
} else {
  dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
}

import { leaguesService } from './services/leagues.service';

async function init() {
  const apiResponse = await leaguesService.fetchLeagues(true);
  await leaguesService.storeLeagues(apiResponse);
}

init();
