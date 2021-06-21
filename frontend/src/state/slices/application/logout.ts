import {createAsyncThunk} from '@reduxjs/toolkit';

import {AsyncThunkConfig} from '#/state/types';

export const logout = createAsyncThunk<
  void,
  void,
  AsyncThunkConfig
>('application/logout', async (params, thunkAPI) => {
  return thunkAPI.extra.authenticationUseCases.logout();
});
