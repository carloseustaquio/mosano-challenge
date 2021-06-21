import {User} from '#/domain/entities/user';
import {UserUseCases} from '#/domain/use-cases/user';
import {HttpClient} from '#/data/protocols/http-client';

export class ApiUserUseCase implements UserUseCases {
  public constructor(private readonly httpClient: HttpClient) {}

  public async getUsers(): Promise<User[]> {
    const response = await this.httpClient.request({
      method: 'get',
      path: '/user',
    });
    return response.getArrayData(User);
  }
}
