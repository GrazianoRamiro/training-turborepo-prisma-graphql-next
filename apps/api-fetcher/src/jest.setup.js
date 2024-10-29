// jest.setup.js
const dotenv = require('dotenv');
const path = require('path');

if (process.env.CI) {
  dotenv.config({
    path: path.resolve(__dirname, '../../../.env.vault'),
  });
} else {
  dotenv.config({});
}
