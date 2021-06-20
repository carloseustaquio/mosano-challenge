import {Container} from '#/container';
import {LoginCommand} from '#/authentication/domain/commands/login-command';
import {LoginController} from '#/authentication/infrastructure/controllers/login-controller';
import {DbLoginService} from '#/authentication/infrastructure/services/db-login-service';
import {DbAuthenticationService} from './infrastructure/services/db-authentication-service';
import {AuthenticationService} from './domain/services/authentication-service';

Container.set(
    LoginController.name,
    new LoginController(new LoginCommand(new DbLoginService())),
);

Container.set(AuthenticationService.name, new DbAuthenticationService());
