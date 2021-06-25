import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {REHYDRATE} from 'redux-persist';
import {ReactElement} from 'react';

import {login} from '#/state/slices/application/login';
import {initialState} from '#/state/slices/application/initial-state';
import {httpClientSingleton} from '#/main/http-client/http-client-singleton';

export const applicationState = createSlice({
  name: 'application',
  initialState,
  reducers: {
    logout: (state) => {
      httpClientSingleton.clearAuthorization();
      return {...state, accessToken: undefined, isLogged: false};
    },
    openModal: (state, action: PayloadAction<ReactElement>) => {
      return {...state, modal: {open: true, component: action.payload}};
    },
    closeModal: (state) => {
      return {...state, modal: {
        open: false,
        component: null,
      }};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, (state, action: AnyAction) => {
      const accessToken = action.payload?.applicationState?.accessToken;
      if (accessToken) {
        httpClientSingleton.setAuthorization(accessToken);
      }
      const applicationState = action.payload?.applicationState || initialState;
      return {...applicationState, modal: initialState.modal};
    });

    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload) {
        httpClientSingleton.setAuthorization(action.payload);
        return {
          ...state,
          accessToken: action.payload,
          isLogged: true,
        };
      }
    });
    builder.addCase(login.rejected, () => {});
  },
});

export const loginAction = login;
export const logoutAction = applicationState.actions.logout;
export const openModalAction = applicationState.actions.openModal;
export const closeModalAction = applicationState.actions.closeModal;
