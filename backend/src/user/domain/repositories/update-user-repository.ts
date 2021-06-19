import {User} from '#/user/domain/entities/user';

export interface UpdateUserRepository {
	update(user: User): Promise<User>;
}
