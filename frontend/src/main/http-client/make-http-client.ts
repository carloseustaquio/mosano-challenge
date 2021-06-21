import {AxiosHttpClient} from '#/infrastructure/http-client/axios-http-client';
import {API_URL} from '#/config/settings';

export const httpClient = new AxiosHttpClient(API_URL);
