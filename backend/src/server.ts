import {createExpressServer, useContainer} from 'routing-controllers';
import {Container} from '#/container';

useContainer(Container.init());

export const server = createExpressServer({
  routePrefix: '/api',
});
