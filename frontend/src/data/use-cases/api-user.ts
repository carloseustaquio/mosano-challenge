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

  public async deleteUser(id: string): Promise<void> {
    const response = await this.httpClient.request({
      method: 'delete',
      path: `/user/${id}`,
    });

    if (!response.hasStatus(StatusCodes.OK)) {
      throw new Error('error deleting user');
    }
  }

  public async editUser(user: User): Promise<User> {
    console.log(user);
    const response = await this.httpClient.request({
      method: 'put',
      path: `/user/${user.id}`,
      data: {
        name: user.name,
        surname: user.surname,
        country: user.country,
        birthdate: user.birthdate,
      },
    });

    if (!response.hasStatus(StatusCodes.OK)) {
      throw new Error('error editing user');
    }

    const updatedUser = response.getData(User);
    updatedUser.birthdate = new Date(user.birthdate);

    return updatedUser;
  }
}
