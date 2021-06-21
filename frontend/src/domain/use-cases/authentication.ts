export type LoginParams = {
	email: string;
	password: string;
}

export interface AuthenticationUseCases {
	login(params: LoginParams): Promise<void>;
	logout(): void;
}
