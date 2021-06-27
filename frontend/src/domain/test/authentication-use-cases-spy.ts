import {AuthenticationUseCases, LoginParams} from '#/domain/use-cases/authentication';

class AuthenticationUseCasesSpy implements AuthenticationUseCases {
  loginParams?: LoginParams;

  error?: Error

  result: string = 'token'

  public async login(params: LoginParams): Promise<string> {
    this.loginParams = params;

    if (this.error) throw this.error;

    return this.result;
  }

  public withError(error: Error) {
    this.error = error;
  }

  public withReturn(text: string) {
    this.result = text;
  }
}

export const makeAuthenticationUseCasesSpy = () => new AuthenticationUseCasesSpy();
