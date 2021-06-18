import {createExpressServer} from 'routing-controllers';
import {GetUsersController} from '#/user/infrastructure/controllers/get-user-controller';

export const server = createExpressServer({
  routePrefix: '/api',
  controllers: [GetUsersController],
});
