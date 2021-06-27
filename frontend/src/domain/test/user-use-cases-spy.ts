import {User} from '#/domain/entities/user';
import {UserUseCases} from '#/domain/use-cases/user';

import {mockUser, mockUserList} from './mock-user';

export class UserUseCaseSpy implements UserUseCases {
  error?: Error;

  public async getUsers(): Promise<User[]> {
    if (this.error) throw this.error;
    return mockUserList();
  }

  public async addUser(_user: User): Promise<User> {
    if (this.error) throw this.error;
    return mockUser();
  }

  public async deleteUser(_id: string): Promise<void> {
    if (this.error) throw this.error;
  }

  public async editUser(_user: User): Promise<User> {
    if (this.error) throw this.error;
    return mockUser();
  }
}

export const makeUserUseCasesSpy = () => new UserUseCaseSpy();
