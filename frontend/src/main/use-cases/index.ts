import {ApiUserUseCase} from '#/data/use-cases/api-user';
import {makeHttpClient} from '#/main/http-client/make-http-client';

export const makeUseCases = () => ({
  userUseCases: new ApiUserUseCase(makeHttpClient()),
});

export type UseCasesType = ReturnType<typeof makeUseCases>
