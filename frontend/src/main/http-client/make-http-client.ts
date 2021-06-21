import {AxiosHttpClient} from '#/infrastructure/http-client/axios-http-client';
import {API_URL} from '#/config/settings';
import {Cache} from '#/data/protocols/cache';

export const makeHttpClient = (localCache: Cache) => new AxiosHttpClient(localCache, API_URL);
