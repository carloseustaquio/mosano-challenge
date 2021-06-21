import {AuthenticationUseCases, LoginParams} from '#/domain/use-cases/authentication';
import {HttpClient} from '#/data/protocols/http-client';

export class ApiAuthenticationUseCases implements AuthenticationUseCases {
  public constructor(private readonly httpClient: HttpClient) {}

  public async login(params: LoginParams): Promise<string> {
    const response = await this.httpClient.request({
      method: 'post',
      path: '/login',
      data: params,
    });

    return response.getRawData<{token: string}>().token;
  }
}
