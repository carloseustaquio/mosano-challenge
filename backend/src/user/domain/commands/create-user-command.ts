import {User} from '#/user/domain/entities/user';
import {CreateUserRepository} from '#/user/domain/repositories/create-user-repository';

export class CreateUserCommand {
	public onSuccess!: (user: User) => void;

	public constructor(private createUserRepository: CreateUserRepository) {}

	public async create(user: User): Promise<void> {
	  const createdUser = await this.createUserRepository.create(user);
	  this.onSuccess(createdUser);
	}
}
