import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {User} from '#/common/entities/user';
import {AxiosHttpClient} from '#/common/http-client/infrastructure/axios-http-client';
import {API_URL} from '#/settings';

interface UserState {
  users: User[],
  greetedUser: User | undefined
}

const initialState: UserState = {
  users: [],
  greetedUser: undefined,
};

export const getUsersThunk = createAsyncThunk('user/getUsers', async () => {
  const httpClient = new AxiosHttpClient(API_URL);
  const response = await httpClient.request({
    method: 'get',
    path: '/user',
  });
  return response.getArrayData(User);
});

export const userState = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    greetUser: (state, action: PayloadAction<User>) => {
      state.greetedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.fulfilled, (state, action: PayloadAction<User[]>) => {
      console.log(getUsersThunk.fulfilled.toString());
      state.users = action.payload;
    });
  },
});

export const {setUsers, greetUser} = userState.actions;
export default userState.reducer;
