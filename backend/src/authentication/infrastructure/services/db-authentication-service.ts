import {AuthenticationService} from '#/authentication/domain/services/authentication-service';
import inMemoryDb from '#/authentication/infrastructure/in-memory-db';
import {TokenService} from '#/common/services/token-service';

export class DbAuthenticationService extends AuthenticationService {
	private readonly dbClient = inMemoryDb

	public constructor(private readonly tokenService = new TokenService()) {
	  super();
	}

	public async verify(token: string) {
	  if (typeof token !== 'string') {
	    return false;
	  }

	  if (!this.tokenService.isValid(token)) {
	    return false;
	  }

	  return this.dbClient.loginTable.has(token);
	}
}
