import {LoginCredentials} from '#/authentication/domain/entities/login-credentials';

export interface LoginRepository {
	login(credentials: LoginCredentials): Promise<string>;
}
