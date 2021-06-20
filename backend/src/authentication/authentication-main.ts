import {Container} from '#/container';
import {LoginCommand} from '#/authentication/domain/commands/login-command';
import {LoginController} from '#/authentication/infrastructure/controllers/login-controller';
import {DbLoginRepository} from '#/authentication/infrastructure/repositories/db-login-repository';

Container.set(
    LoginController.name,
    new LoginController(new LoginCommand(new DbLoginRepository())),
);
