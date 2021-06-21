import {configureStore} from '@reduxjs/toolkit';

import {userReducer} from '#/state/slices/user';
import {UseCasesType} from '#/main/use-cases';

export const store = (useCases: UseCasesType) => configureStore({
  reducer: {
    userState: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: useCases,
      },
    }),
});

export const resolvedStore = store({} as UseCasesType);
