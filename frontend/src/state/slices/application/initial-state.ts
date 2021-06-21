import {ApplicationState} from './types';

export const initialState: ApplicationState = {
  isLogged: false,
  accessToken: undefined,
  modal: {
    open: false,
    component: null,
  },
};
