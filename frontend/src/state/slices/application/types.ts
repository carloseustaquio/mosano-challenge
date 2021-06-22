import {ReactElement} from 'react';

export type ModalState = {
  open: boolean,
  component: ReactElement | null,
}

export type ApplicationState = {
  isLogged: boolean;
  accessToken: string | undefined,
  modal: ModalState
}
