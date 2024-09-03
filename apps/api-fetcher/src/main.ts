import { leaguesService } from './services/leagues.service';
import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

const envPath = path.resolve(__dirname, '../../../.env');

if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else {
  console.log('No .env file found, relying on environment variables.');
}

async function init() {
  const apiResponse = await leaguesService.fetchLeagues(true);
  await leaguesService.storeLeagues(apiResponse);
}

init();
