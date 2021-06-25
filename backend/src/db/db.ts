import mongoose from 'mongoose';

import {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} from '#/settings';

import {seed} from './seed';

export const url =
	`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

mongoose.connect(url, options).then(() => {
  console.log('MongoDB is connected');
  seed();
}).catch((error) => {
  console.log(error);
});
