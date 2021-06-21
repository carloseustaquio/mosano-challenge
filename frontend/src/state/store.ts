import {configureStore} from '@reduxjs/toolkit';

import {userState} from '#/state/slices/user';
import {countryState} from '#/state/slices/country';
import {UseCasesType} from '#/main/use-cases';

export const store = (useCases: UseCasesType) => configureStore({
  reducer: {
    userState: userState.reducer,
    countryState: countryState.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: useCases,
      },
    }),
});

export const resolvedStore = store({} as UseCasesType);
