import {User} from '#/user/domain/entities/user';
import {CreateUserRepository} from '../repositories/create-user-repository';

export class CreateUserCommand {
	public onSuccess!: (user: User) => void;

	public onError!: (error: Error) => void;

	public constructor(private createUserRepository: CreateUserRepository) {}

	public async create(user: User): Promise<void> {
	  try {
	    const response = await this.createUserRepository.create(user);
	    this.onSuccess(response);
	  } catch (error) {
	    this.onError(error);
	  }
	}
}
