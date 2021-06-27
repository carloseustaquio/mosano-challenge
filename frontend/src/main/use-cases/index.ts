import {ApiAuthenticationUseCases} from '#/data/use-cases/api-authentication';
import {ApiCountryUseCases} from '#/data/use-cases/api-country';
import {ApiUserUseCase} from '#/data/use-cases/api-user';
import {AuthenticationUseCases} from '#/domain/use-cases/authentication';
import {CountryUseCases} from '#/domain/use-cases/country';
import {UserUseCases} from '#/domain/use-cases/user';
import {httpClientSingleton} from '#/main/http-client/http-client-singleton';

export type UseCasesType = {
  userUseCases: UserUseCases,
  countryUseCases: CountryUseCases,
  authenticationUseCases: AuthenticationUseCases
}

export const makeUseCases = (): UseCasesType => {
  return {
    userUseCases: new ApiUserUseCase(httpClientSingleton),
    countryUseCases: new ApiCountryUseCases(httpClientSingleton),
    authenticationUseCases: new ApiAuthenticationUseCases(httpClientSingleton),
  };
};
