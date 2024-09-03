import { leaguesService } from './services/leagues.service';

async function init() {
  const apiResponse = await leaguesService.fetchLeagues(true);
  await leaguesService.storeLeagues(apiResponse);
}

init();
