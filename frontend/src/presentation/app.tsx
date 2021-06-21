import {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '#/state/hooks';
import {greetUserAction, getUsersAction} from '#/state/slices/user';
import {Text} from '#/presentation/text';
import {useTranslation, setLanguage} from '#/presentation/translation/translation';
import {SupportedLanguages} from '#/presentation/translation/types';
import {User} from '#/domain/entities/user';
import {getCountriesAction} from '#/state/slices/country';
import {loginAction} from '#/state/slices/application';

export const App = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const {users, greetedUser, countries, isLogged} = useAppSelector(({userState, countryState, applicationState}) => ({
    users: userState.users,
    greetedUser: userState.greetedUser,
    countries: countryState.countries,
    isLogged: applicationState.isLogged,
  }));

  const loadData = async () => {
    dispatch(getUsersAction());
    dispatch(getCountriesAction());
    dispatch(loginAction({email: 'nelson@mosano.eu', password: 'benfica'}));
  };

  const handleGreetUser = (user: User) => {
    dispatch(greetUserAction(user));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Text text={t('title')} />
      <button onClick={() => setLanguage(SupportedLanguages.pt)}>PT</button>
      <button onClick={() => setLanguage(SupportedLanguages.en)}>EN</button>
      <div>{t('date', {date: new Date()})}</div>
      {users.map((user) => (
        <button key={user.id} onClick={() => handleGreetUser(user)}>{user.name}</button>
      ))}
      {countries.map((country) => (
        <p key={country.id}>{country.name}</p>
      ))}
      <strong>
        {greetedUser?.name}
        {greetedUser?.surname}
        {greetedUser?.birthdate}
      </strong>
      <h1>Is logged? {JSON.stringify(isLogged)}</h1>
    </div>
  );
};
