import express from 'express';
import router from './router.js';
import { getHealthPayload } from './health.js';

const app = express();

app.use(express.json());
app.get('/health', (_req, res) => {
  res.status(200).json(getHealthPayload());
});
app.use('/', router);

export default app;
