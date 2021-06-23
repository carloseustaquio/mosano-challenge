import {User} from '#/domain/entities/user';

export type UserFormState = {
  id: string,
  isEditing: boolean,
  name: string,
  surname: string,
  countryId: string,
  birthdate: string,
}

export interface UserState {
  users: User[],
  greetedUser: User | undefined
  showGreetUser: boolean,
  userFormInitialState: UserFormState,
}
