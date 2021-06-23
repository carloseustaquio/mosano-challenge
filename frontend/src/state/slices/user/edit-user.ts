import {createAsyncThunk} from '@reduxjs/toolkit';

import {AsyncThunkConfig} from '#/state/types';
import {User} from '#/domain/entities/user';

export const editUser = createAsyncThunk<
User,
User,
AsyncThunkConfig
>('user/editUsers', async (params, thunkAPI) => {
  try {
    const result = await thunkAPI.extra.userUseCases.editUser(params);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
