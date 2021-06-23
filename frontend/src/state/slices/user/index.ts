import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {getUsers} from '#/state/slices/user/get-users';
import {initialState} from '#/state/slices/user/initial-state';
import {User} from '#/domain/entities/user';
import {addUser} from '#/state/slices/user/add-user';

export const userState = createSlice({
  name: 'user',
  initialState,
  reducers: {
    greetUser: (state, action: PayloadAction<User>) => {
      return {...state, greetedUser: action.payload, showGreetUser: true};
    },
    removeGreetUser: (state) => {
      return {...state, showGreetUser: false};
    },
    clearUsers: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      console.log(action.payload);
      return {...state, users: action.payload};
    });
    builder.addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
      return {...state, users: [...state.users, action.payload]};
    });
  },
});

export const greetUserAction = userState.actions.greetUser;
export const removeGreetUserAction = userState.actions.removeGreetUser;
export const clearUsersAction = userState.actions.clearUsers;
export const getUsersAction = getUsers;
export const addUserAction = addUser;
