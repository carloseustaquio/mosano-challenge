import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {omit} from 'lodash';

import {HttpClientRequest} from '#/data/protocols/http-client-request';
import {HttpClientResponse} from '#/data/protocols/http-client-response';
import {HttpClient} from '#/data/protocols/http-client';
import {Cache} from '#/data/protocols/cache';

export class AxiosHttpClient implements HttpClient {
  protected readonly axios: AxiosInstance;

  public constructor(
    private readonly localCache: Cache,
    private readonly baseUrl: string = '',
  ) {
    this.axios = axios.create({baseURL: this.baseUrl});
    this.setAuthorization(localCache.get('accessToken'));
  }

  public async request(request: HttpClientRequest): Promise<HttpClientResponse> {
    const axiosRequest: AxiosRequestConfig = {
      url: request.path,
      data: request.data,
      params: request.params,
      method: request.method,
    };

    const response = await this.axios.request(axiosRequest);

    return new HttpClientResponse(response.status, response.data);
  }

  public setAuthorization(accessToken: string): void {
    this.axios.defaults.headers.authorization = accessToken;
  }

  public clearAuthorization(): void {
    this.axios.defaults.headers = omit(
        this.axios.defaults.headers,
        'authorization',
    );
    this.localCache.delete('accessToken');
  }
}
