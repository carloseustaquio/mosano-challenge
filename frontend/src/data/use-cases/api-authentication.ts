import {StatusCodes} from 'http-status-codes';

import {AuthenticationUseCases, LoginParams} from '#/domain/use-cases/authentication';
import {HttpClient} from '#/data/protocols/http-client';
import {Cache} from '#/data/protocols/cache';

export class ApiAuthenticationUseCases implements AuthenticationUseCases {
  public constructor(
    private readonly httpClient: HttpClient,
    private readonly cache: Cache,
  ) {}

  public async login(params: LoginParams): Promise<string> {
    const response = await this.httpClient.request({
      method: 'post',
      path: '/login',
      data: params,
    });

    if (!response.hasStatus(StatusCodes.OK)) throw new Error('login failed');

    return response.getRawData<{token: string}>().token;
  }

  public logout(): void {
    this.cache.delete('accessToken');
  }

  private saveAccessToken(accessToken: string) {
    this.cache.set('accessToken', {accessToken});
  }
}
