import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {getUsers} from '#/state/slices/user/get-users';
import {initialState} from '#/state/slices/user/initial-state';
import {User} from '#/domain/entities/user';

export const userState = createSlice({
  name: 'user',
  initialState,
  reducers: {
    greetUser: (state, action: PayloadAction<User>) => {
      state.greetedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    });
  },
});

export const greetUserAction = userState.actions.greetUser;
export const getUsersAction = getUsers;
export const userReducer = userState.reducer;
