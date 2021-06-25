import {DeleteUserRepository} from '#/user/domain/repositories/delete-user-repository';
import {UserModel} from '#/user/infrastructure/models/user-model';

export class DbDeleteUserRepository implements DeleteUserRepository {
	private readonly model = UserModel

	public async delete(id: string): Promise<void> {
	  await this.model.deleteOne({id});
	}
}
