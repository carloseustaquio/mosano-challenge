import {IsString} from 'class-validator';

import {LoginCredentials} from '#/authentication/domain/entities/login-credentials';

export class LoginRequest {
	@IsString()
	public email!: string;

	@IsString()
	public password!: string

	public toDomain() {
	  return new LoginCredentials(this.email, this.password);
	}
}
