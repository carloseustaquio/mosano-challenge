import {AuthenticationService} from '#/authentication/domain/services/authentication-service';
import {TokenService} from '#/common/services/token-service';
import {TokenModel} from '#/authentication/infrastructure/models/token-model';

export class DbAuthenticationService extends AuthenticationService {
	private readonly model = TokenModel

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

	  const count = await this.model.countDocuments({token});

	  return count > 0;
	}
}
