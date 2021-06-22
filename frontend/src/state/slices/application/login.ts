import {createAsyncThunk} from '@reduxjs/toolkit';

import {AsyncThunkConfig} from '#/state/types';
import {LoginParams} from '#/domain/use-cases/authentication';

export const login = createAsyncThunk<
  string | undefined,
  LoginParams,
  AsyncThunkConfig
>('application/login', async (params, thunkAPI) => {
  try {
    const result = await thunkAPI.extra.authenticationUseCases.login(params);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
