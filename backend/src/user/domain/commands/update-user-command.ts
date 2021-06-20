import {User} from '#/user/domain/entities/user';
import {UpdateUserRepository} from '#/user/domain/repositories/update-user-repository';
import {UserNotFound} from '#/user/domain/errors/user-not-found-error';
import {BaseError} from '#/common/errors/base-error';

export class UpdateUserCommand {
	public onSuccess!: (user: User) => void;

	public onUserNotFound!: (error: BaseError) => void;

	public constructor(private updateUserRepository: UpdateUserRepository) {}

	public async update(user: User): Promise<void> {
	  try {
	    const updatedUser = await this.updateUserRepository.update(user);
	    this.onSuccess(updatedUser.withNextBirthdayAndAge());
	  } catch (error) {
	    this.handleErrors(error);
	  }
	}

	private handleErrors(error: BaseError): void {
	    switch (error.name) {
	      case UserNotFound.name:
	        return this.onUserNotFound(error);
	      default:
	        throw error;
	  }
	}
}
