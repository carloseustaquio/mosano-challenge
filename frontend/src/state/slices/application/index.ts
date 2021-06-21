import {createSlice} from '@reduxjs/toolkit';

import {login} from '#/state/slices/application/login';
import {logout} from '#/state/slices/application/logout';

export const applicationState = createSlice({
  name: 'application',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, () => {});
    builder.addCase(logout.fulfilled, () => {});
  },
});

export const loginAction = login;
export const logoutAction = logout;
