import {createAsyncThunk} from '@reduxjs/toolkit';

import {AsyncThunkConfig} from '#/state/types';
import {User} from '#/domain/entities/user';

// import {ApplicationState} from '../application/types';

export const addUser = createAsyncThunk<
User,
User,
AsyncThunkConfig
>('user/addUsers', async (params, thunkAPI) => {
  // const state = thunkAPI.getState() as ApplicationState;

  // if (!state.isLogged) return params;

  try {
    const result = await thunkAPI.extra.userUseCases.addUser(params);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});
