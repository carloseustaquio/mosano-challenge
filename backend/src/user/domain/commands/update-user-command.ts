import {User} from '#/user/domain/entities/user';
import {UpdateUserRepository} from '#/user/domain/repositories/update-user-repository';

export class UpdateUserCommand {
	public onSuccess!: (user: User) => void;

	public onError!: (error: Error) => void;

	public constructor(private updateUserRepository: UpdateUserRepository) {}

	public async update(user: User): Promise<void> {
	  try {
	    const response = await this.updateUserRepository.update(user);
	    this.onSuccess(response);
	  } catch (error) {
	    this.onError(error);
	  }
	}
}
