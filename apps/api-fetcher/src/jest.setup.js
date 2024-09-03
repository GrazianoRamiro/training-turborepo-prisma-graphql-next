// jest.setup.js
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// const envPath = path.resolve(__dirname, '../../../.env');

// if (fs.existsSync(envPath)) {
//   dotenv.config({ path: envPath });
// } else {
console.log('DOTENV_KEY', process.env.DOTENV_KEY);
dotenv.config({
  path: path.resolve(__dirname, '../../../.env.vault'),
});
console.log('Jest URL', process.env.API_FOOTBALL_BASE_URL);
console.log('Jest KEY', process.env.API_FOOTBALL_API_KEY);
console.log('No .env file found, relying on environment variables.');
// }
