import {createExpressServer, useContainer} from 'routing-controllers';
import {Container} from '#/container';
import {authorizationMiddleware} from './middlewares/authorization-middleware';

useContainer(Container.init());

export const server = createExpressServer({
  routePrefix: '/api',
  authorizationChecker: authorizationMiddleware,
});
