import {ApiAuthenticationUseCases} from '#/data/use-cases/api-authentication';
import {ApiCountryUseCases} from '#/data/use-cases/api-country';
import {ApiUserUseCase} from '#/data/use-cases/api-user';
import {makeHttpClient} from '#/main/http-client/make-http-client';
import {makeLocalCache} from '#/main/cache/make-local-cache';

export const makeUseCases = () => {
  const localCache = makeLocalCache();
  const httpClient = makeHttpClient(localCache);
  return {
    userUseCases: new ApiUserUseCase(httpClient),
    countryUseCases: new ApiCountryUseCases(httpClient),
    authenticationUseCases: new ApiAuthenticationUseCases(httpClient, localCache),
  };
};

export type UseCasesType = ReturnType<typeof makeUseCases>
