import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {initialState} from '#/state/slices/application/initial-state';
import {login} from '#/state/slices/application/login';

export const applicationState = createSlice({
  name: 'application',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.isLogged = true;
    });
  },
});

export const loginAction = login;
