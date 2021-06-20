import {LoginCredentials} from '#/authentication/domain/entities/login-credentials';

export interface LoginService {
	login(credentials: LoginCredentials): Promise<string>;
}
