import {UserState} from '#/state/slices/user/types';

export const initialState: UserState = {
  users: [],
  greetedUser: undefined,
  showGreetUser: false,
  userFormInitialState: {
    id: '',
    isEditing: false,
    name: '',
    surname: '',
    countryId: '',
    birthdate: '',
  },
};
