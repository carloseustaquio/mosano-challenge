import {UserNotFound} from '#/user/domain/errors/user-not-found-error';
import {DeleteUserRepository} from '#/user/domain/repositories/delete-user-repository';
import {inMemoryUserTable} from '#/user/infrastructure/in-memory-user-table';

export class DbDeleteUserRepository implements DeleteUserRepository {
	private readonly dbClient = inMemoryUserTable

	public delete(id: string): Promise<void> {
	  if (!this.dbClient.has(id)) throw new UserNotFound();
	  this.dbClient.delete(id);
	  return Promise.resolve();
	}
}
