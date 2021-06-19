import {Country} from '#/country/domain/entities/country';
import {User} from '#/user/domain/entities/user';
import {ListUsersRepository} from '#/user/domain/repositories/list-users-repository';

export class DbListUsersRepository implements ListUsersRepository {
  public getUsers(): Promise<User[]> {
    return Promise.resolve([new User('1', 'Carlos', 'Eustáquio', new Country('1', 'Brasil'), new Date('1999-07-22'))]);
  }
}
