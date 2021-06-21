import {StatusCodes} from 'http-status-codes';

import {AuthenticationUseCases, LoginParams} from '#/domain/use-cases/authentication';
import {HttpClient} from '#/data/protocols/http-client';
import {Cache} from '#/data/protocols/cache';

export class ApiAuthenticationUseCases implements AuthenticationUseCases {
  public constructor(
    private readonly httpClient: HttpClient,
    private readonly cache: Cache,
  ) {}

  public async login(params: LoginParams): Promise<void> {
    const response = await this.httpClient.request({
      method: 'post',
      path: '/login',
      data: params,
    });

    if (!response.hasStatus(StatusCodes.OK)) throw new Error('login failed');

    const token = response.getRawData<{token: string}>().token;
    this.saveAccessToken(token);
    return;
  }

  private saveAccessToken(accessToken: string) {
    this.cache.set('accessToken', {accessToken});
  }

  public getAccessToken(): string {
    return this.cache.get('accessToken');
  }
}
