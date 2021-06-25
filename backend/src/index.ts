import 'reflect-metadata';
// eslint-disable-next-line import/order
import moduleAlias from 'module-alias';
moduleAlias.addAlias('#', __dirname);

import dotenv from 'dotenv';
dotenv.config();

import {server} from '#/server';
import {PORT} from '#/settings';
import '#/db/db';

const port = PORT || 8080;

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
