import {User} from '#/user/domain/entities/user';

export interface CreateUserRepository {
	create(user: User): Promise<User>
}
