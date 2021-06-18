require('reflect-metadata');
import moduleAlias from 'module-alias';
moduleAlias.addAlias('#', __dirname);

import {server} from '#/server';

const port = 8080;

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
