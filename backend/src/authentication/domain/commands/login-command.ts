import {LoginService} from '#/authentication/domain/services/login-service';
import {LoginCredentials} from '#/authentication/domain/entities/login-credentials';
import {InvalidCredentials} from '#/authentication/domain/errors/invalid-credentials-error';
import {BaseError} from '#/common/errors/base-error';

export class LoginCommand {
	public onSuccess!: (token: string) => void;

	public onInvalidCredentials!: (error: BaseError) => void;

	public constructor(private loginService: LoginService) {}

	public async login(credentials: LoginCredentials): Promise<void> {
	  try {
	    const token = await this.loginService.login(credentials);
	    this.onSuccess(token);
	  } catch (error) {
	    this.handleErrors(error);
	  }
	}

	private handleErrors(error: BaseError): void {
	    switch (error.name) {
	      case InvalidCredentials.name:
	        return this.onInvalidCredentials(error);
	      default:
	        throw error;
	  }
	}
}
