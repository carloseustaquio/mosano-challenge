import {createAsyncThunk} from '@reduxjs/toolkit';

import {AsyncThunkConfig} from '#/state/types';
import {User} from '#/domain/entities/user';

export const getUsers = createAsyncThunk<
User[],
void,
AsyncThunkConfig
>('user/getUsers', async (_, thunkAPI) => {
  return thunkAPI.extra.userUseCases.getUsers();
});
