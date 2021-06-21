import {AnyAction, createSlice} from '@reduxjs/toolkit';
import {REHYDRATE} from 'redux-persist';

import {login} from '#/state/slices/application/login';
import {initialState} from '#/state/slices/application/initial-state';
import {httpClient} from '#/main/http-client/make-http-client';

export const applicationState = createSlice({
  name: 'application',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = undefined;
      state.isLogged = false;
      httpClient.clearAuthorization();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, (state, action: AnyAction) => {
      const accessToken = action.payload?.applicationState?.accessToken;
      if (accessToken) {
        httpClient.setAuthorization(accessToken);
      }
    });
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload) {
        httpClient.setAuthorization(action.payload);
        state.accessToken = action.payload;
        state.isLogged = true;
      }
    });
  },
});

export const loginAction = login;
export const logoutAction = applicationState.actions.logout;
