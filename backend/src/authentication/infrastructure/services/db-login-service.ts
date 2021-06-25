import {LoginCredentials} from '#/authentication/domain/entities/login-credentials';
import {InvalidCredentials} from '#/authentication/domain/errors/invalid-credentials-error';
import {LoginService} from '#/authentication/domain/services/login-service';
import {TokenService} from '#/common/services/token-service';
import {TokenModel} from '#/authentication/infrastructure/models/token-model';
import {SignedUserModel} from '#/authentication/infrastructure/models/signed-user-model';

export class DbLoginService implements LoginService {
	private readonly tokenModel = TokenModel
	private readonly signedUserModel = SignedUserModel
	private readonly tokenService = new TokenService()

	public async login(credentials: LoginCredentials): Promise<string> {
	  const signedUser = await this.signedUserModel.findOne({email: credentials.email});

	  if (!signedUser || signedUser.password !== credentials.password) {
	    throw new InvalidCredentials();
	  }

	  const token = this.tokenService.generateToken(credentials.email);

	  this.tokenModel.create({token});

	  return token;
	}
}
