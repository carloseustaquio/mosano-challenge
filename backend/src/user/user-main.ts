import {Container} from '#/container';
import {ListUsersController} from '#/user/infrastructure/controllers/list-users-controller';
import {CreateUserCommand} from '#/user/domain/commands/create-user-command';
import {ListUsersCommand} from '#/user/domain/commands/list-users-command';
import {CreateUserController} from '#/user/infrastructure/controllers/create-user-controller';
import {DbCreateUserRepository} from '#/user/infrastructure/repositories/db-create-user-repository';
import {DbListUsersRepository} from '#/user/infrastructure/repositories/db-list-users-repository';

Container.set(
    ListUsersController.name,
    new ListUsersController(new ListUsersCommand(new DbListUsersRepository())),
);

Container.set(
    CreateUserController.name,
    new CreateUserController(new CreateUserCommand(new DbCreateUserRepository())),
);
