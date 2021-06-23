import {UserState} from '#/state/slices/user/types';

export const initialState: UserState = {
  users: [],
  greetedUser: undefined,
  showGreetUser: false,
};
