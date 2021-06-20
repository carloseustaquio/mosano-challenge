import {LoginCredentials} from '#/authentication/domain/entities/login-credentials';
import {IsString} from 'class-validator';

export class LoginRequest {
	@IsString()
	public email!: string;

	@IsString()
	public password!: string

	public toDomain() {
	  return new LoginCredentials(this.email, this.password);
	}
}
