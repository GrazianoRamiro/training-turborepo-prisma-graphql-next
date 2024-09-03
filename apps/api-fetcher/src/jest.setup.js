// jest.setup.js
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '../../../.env');

if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else {
  console.log('No .env file found, relying on environment variables.');
}
