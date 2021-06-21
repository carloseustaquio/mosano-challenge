import {RouteProps, BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import {Home} from '#/presentation/pages/home';
import BasePrivateRoute from '#/presentation/components/private-route/private-route';
import {makeLocalCache} from '#/main/cache/make-local-cache';
import {Revisited} from '#/presentation/pages/revisited';

const Router: React.FC = () => {
  const isLogged = () => !!makeLocalCache().get('accessToken');
  const PrivateRoute = (props: RouteProps) => <BasePrivateRoute isLogged={isLogged} {...props} />;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <PrivateRoute path="/revisited" component={Revisited} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
