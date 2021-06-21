import {ApiAuthenticationUseCases} from '#/data/use-cases/api-authentication';
import {ApiCountryUseCases} from '#/data/use-cases/api-country';
import {ApiUserUseCase} from '#/data/use-cases/api-user';
import {httpClientSingleton} from '#/main/http-client/http-client-singleton';

export const makeUseCases = () => {
  return {
    userUseCases: new ApiUserUseCase(httpClientSingleton),
    countryUseCases: new ApiCountryUseCases(httpClientSingleton),
    authenticationUseCases: new ApiAuthenticationUseCases(httpClientSingleton),
  };
};

export type UseCasesType = ReturnType<typeof makeUseCases>
