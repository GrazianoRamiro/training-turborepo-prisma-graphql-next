import { leaguesService } from './services/leagues.service';
import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

const envPath = path.resolve(__dirname, '../../../.env');

// if (fs.existsSync(envPath)) {
//   dotenv.config({ path: envPath });
// } else {
dotenv.config({
  path: path.resolve(__dirname, '../../../.env.vault'),
});
console.log('Main URL', process.env.API_FOOTBALL_BASE_URL);
console.log('Main KEY', process.env.API_FOOTBALL_API_KEY);
console.log('No .env file found, relying on environment variables.');
// }

async function init() {
  const apiResponse = await leaguesService.fetchLeagues(true);
  await leaguesService.storeLeagues(apiResponse);
}

init();
