import test from 'node:test';
import assert from 'node:assert/strict';

import db from '../../database.js';

const requiredVars = ['DB_NAME', 'DB_USER', 'DB_PASSWORD', 'DB_HOST'];
const hasDatabaseConfig = requiredVars.every((key) => process.env[key]);

(hasDatabaseConfig ? test : test.skip)(
  'deve autenticar no banco PostgreSQL',
  async () => {
    await db.authenticate();

    const [result] = await db.query('SELECT 1 AS ok');
    assert.equal(result[0].ok, 1);
  }
);

test.after(async () => {
  await db.close();
});
