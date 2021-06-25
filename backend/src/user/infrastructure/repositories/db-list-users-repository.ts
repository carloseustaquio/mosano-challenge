import {User} from '#/user/domain/entities/user';
import {ListUsersRepository} from '#/user/domain/repositories/list-users-repository';
import {UserModel} from '#/user/infrastructure/models/user-model';

export class DbListUsersRepository implements ListUsersRepository {
	private readonly model = UserModel;

	public async getUsers(): Promise<User[]> {
	  const users = await this.model.find();

	  return users.map((user) => user.toDomain());
	}
}
