import {User} from '#/domain/entities/user';

export interface UserUseCases {
  getUsers(): Promise<User[]>
  addUser(user: User): Promise<User>
  editUser(user: User): Promise<User>
  deleteUser(id: string): Promise<void>
}
