import {User} from '#/user/domain/entities/user';
import {UpdateUserRepository} from '#/user/domain/repositories/update-user-repository';
import {inMemoryUserTable} from '#/user/infrastructure/in-memory-user-table';

export class DbUpdateUserRepository implements UpdateUserRepository {
	private readonly dbClient = inMemoryUserTable

	public update(user: User): Promise<User> {
	  if (this.dbClient.has(user.id)) this.dbClient.delete(user.id);
	  this.dbClient.set(user.id, user);
	  return Promise.resolve(user);
	}
}
