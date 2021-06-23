import {createAsyncThunk} from '@reduxjs/toolkit';

import {AsyncThunkConfig} from '#/state/types';

export const deleteUser = createAsyncThunk<
string,
string,
AsyncThunkConfig
>('user/deleteUser', async (params, thunkAPI) => {
  await thunkAPI.extra.userUseCases.deleteUser(params);
  return params;
});
