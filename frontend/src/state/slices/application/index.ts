import {createSlice} from '@reduxjs/toolkit';

import {login} from '#/state/slices/application/login';

export const applicationState = createSlice({
  name: 'application',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, () => {});
  },
});

export const loginAction = login;
