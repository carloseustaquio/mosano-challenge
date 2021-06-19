import {DeleteUserRepository} from '#/user/domain/repositories/delete-user-repository';
import {UserNotFound} from '#/user/domain/errors/user-not-found-error';
import {BaseError} from '#/common/errors/base-error';

export class DeleteUserCommand {
	public onSuccess!: () => void;

	public onUserNotFound!: (error: BaseError) => void;

	public constructor(private deleteUserRepository: DeleteUserRepository) {}

	public async delete(id: string): Promise<void> {
	  try {
	    await this.deleteUserRepository.delete(id);
	    this.onSuccess();
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
