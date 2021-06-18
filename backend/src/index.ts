import moduleAlias from 'module-alias';
moduleAlias.addAlias('#', __dirname);

import express from 'express';
import file from '#/file';

const app = express();

const PORT = 8000;

app.get('/', (req, res) => res.send(file));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
