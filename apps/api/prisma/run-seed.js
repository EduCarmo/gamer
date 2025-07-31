const path = require('path');
const envPath = path.resolve(__dirname, '../.env');

console.log('Tentando carregar .env de:', envPath);

require('dotenv').config({ path: envPath });

console.log('DATABASE_URL:', process.env.DATABASE_URL);

require('ts-node').register();
require('./seed.ts');
