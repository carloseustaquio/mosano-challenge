import {ListUsersRepository} from '#/user/domain/repositories/list-users-repository';
import {User} from '#/user/domain/entities/user';

export class ListUsersCommand {
	public onSuccess!: (users: User[]) => void;

	public constructor(private listUsersRepository: ListUsersRepository) {}

	public async getUsers(): Promise<void> {
	  const users = await this.listUsersRepository.getUsers();

	  for (const user of users) {
	    user.withNextBirthdayAndAge();
	  }

	  this.onSuccess(users);
	}
}
