import {User} from '#/user/domain/entities/user';
import {CreateUserRepository} from '#/user/domain/repositories/create-user-repository';
import {UserModel} from '#/user/infrastructure/models/user-model';

export class DbCreateUserRepository implements CreateUserRepository {
	private readonly model = UserModel;

	public async create(user: User): Promise<User> {
	  const dbUser = this.model.fromDomain(user);
	  const createdUser = await this.model.create(dbUser);
	  return createdUser.toDomain();
	}
}
