import {StatusCodes} from 'http-status-codes';

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

  public async addUser(user: User): Promise<User> {
    const response = await this.httpClient.request({
      method: 'post',
      path: '/user',
      data: user,
    });

    if (!response.hasStatus(StatusCodes.CREATED)) {
      throw new Error('error creating user');
    }

    return response.getData(User);
  }
}
