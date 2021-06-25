import {User} from '#/user/domain/entities/user';
import {UpdateUserRepository} from '#/user/domain/repositories/update-user-repository';
import {UserModel} from '#/user/infrastructure/models/user-model';

export class DbUpdateUserRepository implements UpdateUserRepository {
	private readonly model = UserModel

	public async update(user: User): Promise<User> {
	  const dbUser = this.model.fromDomain(user);
	  const updatedUser = await this.model.findOneAndUpdate({id: user.id}, dbUser, {new: true});
	  if (!updatedUser) throw Error('error while updated user');
	  return updatedUser.toDomain();
	}
}
