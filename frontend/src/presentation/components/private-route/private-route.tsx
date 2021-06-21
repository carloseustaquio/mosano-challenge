import {RouteProps, Route, Redirect} from 'react-router-dom';

type Props = {
  isLogged: boolean
}

const PrivateRoute: React.FC<RouteProps & Props> = ({isLogged, ...props}: RouteProps & Props) => {
  return isLogged ? (
    <Route {...props} />
  ) : (
    <Route {...props} component={() => <Redirect to="/login" />} />
  );
};

export default PrivateRoute;
