import {User} from '#/domain/entities/user';

export interface UserState {
  users: User[],
  greetedUser: User | undefined
  showGreetUser: boolean,
}
