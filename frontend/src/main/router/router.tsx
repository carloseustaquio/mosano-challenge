import {RouteProps, BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import {Home} from '#/presentation/pages/home/home';
import BasePrivateRoute from '#/presentation/components/private-route/private-route';
import {Revisited} from '#/presentation/pages/revisited/revisited';
import {useAppSelector} from '#/state/hooks';

const Router: React.FC = () => {
  const isLogged = useAppSelector(({applicationState}) => applicationState.isLogged);
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
