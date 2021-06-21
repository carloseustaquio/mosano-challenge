import {ApiAuthenticationUseCases} from '#/data/use-cases/api-authentication';
import {ApiCountryUseCases} from '#/data/use-cases/api-country';
import {ApiUserUseCase} from '#/data/use-cases/api-user';
import {makeHttpClient} from '#/main/http-client/make-http-client';

export const makeUseCases = () => {
  const httpClient = makeHttpClient();
  return {
    userUseCases: new ApiUserUseCase(httpClient),
    countryUseCases: new ApiCountryUseCases(httpClient),
    authenticationUseCases: new ApiAuthenticationUseCases(httpClient),
  };
};

export type UseCasesType = ReturnType<typeof makeUseCases>
