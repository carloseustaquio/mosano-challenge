import {RouteProps, BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import {makeHome} from '#/main/pages/home-factory';
import BasePrivateRoute from '#/presentation/components/private-route/private-route';
import {makeLocalCache} from '#/main/cache/make-local-cache';

const Router: React.FC = () => {
  const isLogged = () => !!makeLocalCache().get('accessToken');
  const PrivateRoute = (props: RouteProps) => <BasePrivateRoute isLogged={isLogged} {...props} />;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={makeHome} />
        <PrivateRoute path="/revisited" component={() => <h1>Logged!</h1>} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
