import {createAsyncThunk} from '@reduxjs/toolkit';

import {AsyncThunkConfig} from '#/state/types';
import {LoginParams} from '#/domain/use-cases/authentication';

export const login = createAsyncThunk<
  string,
  LoginParams,
  AsyncThunkConfig
>('application/login', async (params, thunkAPI) => {
  return thunkAPI.extra.authenticationUseCases.login(params);
});
