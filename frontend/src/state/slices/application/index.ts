import {createSlice} from '@reduxjs/toolkit';

import {login} from '#/state/slices/application/login';
import {logout} from '#/state/slices/application/logout';
import {initialState} from '#/state/slices/application/initial-state';

export const applicationState = createSlice({
  name: 'application',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload) {
        state.accessToken = action.payload;
        state.isLogged = true;
      }
    });
    builder.addCase(logout.fulfilled, () => {});
  },
});

export const loginAction = login;
export const logoutAction = logout;
