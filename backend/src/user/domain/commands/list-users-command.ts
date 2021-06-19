import {ListUsersRepository} from '#/user/domain/repositories/list-users-repository';
import {User} from '#/user/domain/entities/user';

export class ListUsersCommand {
	public onSuccess!: (users: User[]) => void;

	public onError!: (error: Error) => void;

	public constructor(private listUsersRepository: ListUsersRepository) {}

	public async getUsers(): Promise<void> {
	  try {
	    const users = await this.listUsersRepository.getUsers();
	    this.onSuccess(users);
	  } catch (error) {
	    this.onError(error);
	  }
	}
}
