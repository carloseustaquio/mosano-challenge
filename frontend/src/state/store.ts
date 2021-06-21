import {configureStore} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import {userState} from '#/state/slices/user';
import {countryState} from '#/state/slices/country';
import {applicationState} from '#/state/slices/application';
import {UseCasesType} from '#/main/use-cases';

const reducers = combineReducers({
  userState: userState.reducer,
  countryState: countryState.reducer,
  applicationState: applicationState.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = (useCases: UseCasesType) => configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: useCases,
      },
    }),
});

export const resolvedStore = store({} as UseCasesType);
