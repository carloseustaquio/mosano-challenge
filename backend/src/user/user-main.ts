import {Container} from '#/container';
import {ListUsersController} from '#/user/infrastructure/controllers/list-users-controller';
import {CreateUserCommand} from '#/user/domain/commands/create-user-command';
import {ListUsersCommand} from '#/user/domain/commands/list-users-command';
import {CreateUserController} from '#/user/infrastructure/controllers/create-user-controller';
import {DbCreateUserRepository} from '#/user/infrastructure/repositories/db-create-user-repository';
import {DbListUsersRepository} from '#/user/infrastructure/repositories/db-list-users-repository';
import {UpdateUserController} from '#/user/infrastructure/controllers/update-user-controller';
import {UpdateUserCommand} from '#/user/domain/commands/update-user-command';
import {DbUpdateUserRepository} from '#/user/infrastructure/repositories/db-update-user-repository';
import {DeleteUserController} from '#/user/infrastructure/controllers/delete-user-controller';
import {DeleteUserCommand} from '#/user/domain/commands/delete-user-command';
import {DbDeleteUserRepository} from '#/user/infrastructure/repositories/db-delete-user-repository';

Container.set(
    ListUsersController.name,
    new ListUsersController(new ListUsersCommand(new DbListUsersRepository())),
);

Container.set(
    CreateUserController.name,
    new CreateUserController(new CreateUserCommand(new DbCreateUserRepository())),
);

Container.set(
    UpdateUserController.name,
    new UpdateUserController(new UpdateUserCommand(new DbUpdateUserRepository())),
);

Container.set(
    DeleteUserController.name,
    new DeleteUserController(new DeleteUserCommand(new DbDeleteUserRepository())),
);
