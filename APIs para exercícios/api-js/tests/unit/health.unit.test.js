import test from 'node:test';
import assert from 'node:assert/strict';

import { getHealthPayload } from '../../health.js';

test('deve retornar payload de health com status ok', () => {
  const payload = getHealthPayload();

  assert.equal(payload.status, 'ok');
  assert.equal(payload.service, 'api-js');
  assert.ok(Date.parse(payload.timestamp));
});
