import {Container} from '#/container';
import {ListUsersController} from '#/user/infrastructure/controllers/list-users-controller';
import {ListUsersCommand} from './domain/commands/list-users-command';
import {DbListUsersRepository} from './infrastructure/repositories/db-list-users-repository';

Container.set(
    ListUsersController.name,
    new ListUsersController(new ListUsersCommand(new DbListUsersRepository())),
);
