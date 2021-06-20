import jwt from 'jsonwebtoken';

export class TokenService {
	private readonly secret = '3xbsQmULpw'
	private readonly expiresIn = '1h'

	public generateToken(email: string) {
	  const tokenData = {email};

	  const token = jwt.sign(tokenData, this.secret, {expiresIn: this.expiresIn});

	  return token;
	}

	public decodeToken(token: string) {
	  return jwt.decode(token);
	}
}
