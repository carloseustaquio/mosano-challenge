import {User} from '#/user/domain/entities/user';
import {CreateUserRepository} from '../repositories/create-user-repository';

export class CreateUserCommand {
	public onSuccess!: (user: User) => void;

	public constructor(private createUserRepository: CreateUserRepository) {}

	public async create(user: User): Promise<void> {
	  const response = await this.createUserRepository.create(user);
	  this.onSuccess(response);
	}
}
