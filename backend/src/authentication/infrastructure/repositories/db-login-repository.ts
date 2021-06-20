import {LoginCredentials} from '#/authentication/domain/entities/login-credentials';
import {InvalidCredentials} from '#/authentication/domain/errors/invalid-credentials-error';
import {LoginRepository} from '#/authentication/domain/repositories/login-repository';
import inMemoryDb from '#/authentication/infrastructure/in-memory-db';
import {TokenService} from '#/common/services/token-service';

export class DbLoginRepository implements LoginRepository {
	private readonly dbClient = inMemoryDb
	private readonly tokenService = new TokenService()

	public async login(credentials: LoginCredentials): Promise<string> {
	  const password = this.dbClient.signedUsersTable.get(credentials.email);

	  if (!password || password !== credentials.password) {
	    throw new InvalidCredentials();
	  }

	  const token = this.tokenService.generateToken(credentials.email);

	  this.dbClient.loginTable.set(token, true);

	  return token;
	}
}
