import {configureStore} from '@reduxjs/toolkit';

import {userState} from '#/state/slices/user';
import {countryState} from '#/state/slices/country';
import {applicationState} from '#/state/slices/application';
import {UseCasesType} from '#/main/use-cases';

export const store = (useCases: UseCasesType) => configureStore({
  reducer: {
    userState: userState.reducer,
    countryState: countryState.reducer,
    applicationState: applicationState.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: useCases,
      },
    }),
});

export const resolvedStore = store({} as UseCasesType);
