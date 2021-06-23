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

    const users = response.getArrayData(User).map((user) => {
      user.birthdate = new Date(user.birthdate);
      return user;
    });

    return users;
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

    const newUser = response.getData(User);
    newUser.birthdate = new Date(user.birthdate);

    return newUser;
  }
}
