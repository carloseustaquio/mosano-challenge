import {Home} from '#/presentation/pages/home';
import {User} from '#/domain/entities/user';
import {useAppSelector, useAppDispatch} from '#/state/hooks';
import {greetUserAction} from '#/state/slices/user';
import {getCountriesAction} from '#/state/slices/country';
import {loginAction} from '#/state/slices/application';

export const makeHome = () => {
  const dispatch = useAppDispatch();
  const {users, greetedUser, countries} = useAppSelector(({userState, countryState}) => ({
    users: userState.users,
    greetedUser: userState.greetedUser,
    countries: countryState.countries,
  }));

  const loadData = async () => {
    dispatch(getCountriesAction());
  };

  const handleLogin = async () => {
    await dispatch(loginAction({email: 'nelson@mosano.eu', password: 'benfica'}));
  };

  const handleGreetUser = (user: User) => {
    dispatch(greetUserAction(user));
  };

  return <Home
    users={users}
    greetedUser={greetedUser}
    countries={countries}
    handleGreetUser={handleGreetUser}
    handleLogin={handleLogin}
    loadData={loadData}
  />;
};
