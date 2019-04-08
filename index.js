import express from 'express';

import Api from './routes/api';

const app = express();
app.use(Api);
app.listen('3000', () => {
  console.log('🌎 => Running...');
});


