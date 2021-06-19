import {User} from '#/user/domain/entities/user';

export interface ListUsersRepository {
	getUsers(): Promise<User[]>;
}
