import jwt from 'jsonwebtoken';

export class TokenService {
	private readonly secret = '3xbsQmULpw'
	private readonly expiresIn = '1h'
	private readonly bearer = 'Bearer'

	public generateToken(email: string) {
	  const tokenData = {email};

	  const token = jwt.sign(tokenData, this.secret, {expiresIn: this.expiresIn});

	  return `${this.bearer} ${token}`;
	}

	public decodeToken(token: string) {
	  const sanitizedToken = token.replace(this.bearer, '').trim();
	  return jwt.decode(sanitizedToken);
	}

	public isValid(token: string) {
	  const decodedToken = this.decodeToken(token);
	  return !(decodedToken === null || typeof decodedToken === 'string');
	}
}
