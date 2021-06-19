import {User} from '#/user/domain/entities/user';
import {ListUsersRepository} from '#/user/domain/repositories/list-users-repository';
import {inMemoryUserTable} from '#/user/infrastructure/in-memory-user-table';

export class DbListUsersRepository implements ListUsersRepository {
	private readonly dbClient = inMemoryUserTable

	public getUsers(): Promise<User[]> {
	  const users = [];
	  for (const user of this.dbClient.values()) {
	    users.push(user);
	  }
	  return Promise.resolve(users);
	}
}
