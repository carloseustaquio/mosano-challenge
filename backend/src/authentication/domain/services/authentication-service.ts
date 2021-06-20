
export abstract class AuthenticationService {
	abstract verify(token: string): Promise<boolean>;
}
