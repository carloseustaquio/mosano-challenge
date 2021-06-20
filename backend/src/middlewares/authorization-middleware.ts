import {ClassConstructor} from 'class-transformer';
import {Action} from 'routing-controllers';

import {AuthenticationService} from '#/authentication/domain/services/authentication-service';
import {Container} from '#/container';

export const authorizationMiddleware = async (action: Action) => {
  const authenticationService = Container.get(AuthenticationService as ClassConstructor<AuthenticationService>);
  const token = action.request.headers.authorization;
  return authenticationService.verify(token);
};
