import {createAsyncThunk} from '@reduxjs/toolkit';

import {AsyncThunkConfig} from '#/state/types';
import {User} from '#/domain/entities/user';
import {ApplicationState} from '#/state/slices/application/types';

export const addUser = createAsyncThunk<
User,
User,
AsyncThunkConfig
>('user/addUsers', async (params, thunkAPI) => {
  const {applicationState: {isLogged}} = thunkAPI.getState() as {applicationState: ApplicationState};

  if (!isLogged) return params;

  try {
    const result = await thunkAPI.extra.userUseCases.addUser(params);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
},
);
