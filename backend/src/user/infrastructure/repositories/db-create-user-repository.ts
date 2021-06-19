import {User} from '#/user/domain/entities/user';
import {CreateUserRepository} from '#/user/domain/repositories/create-user-repository';
import {inMemoryUserTable} from '#/user/infrastructure/in-memory-user-table';

export class DbCreateUserRepository implements CreateUserRepository {
	private readonly dbClient = inMemoryUserTable

	public async create(user: User): Promise<User> {
	  this.dbClient.set(user.id, user);
	  console.log(this.dbClient);
	  return user;
	}
}
