import {User} from '#/domain/entities/user';

export interface UserUseCases {
	getUsers(): Promise<User[]>
}
