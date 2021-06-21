import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {Text} from '#/presentation/components/text';
import {useTranslation, setLanguage} from '#/presentation/translation/translation';
import {SupportedLanguages} from '#/presentation/translation/types';
import {User} from '#/domain/entities/user';
import {useAppSelector, useAppDispatch} from '#/state/hooks';
import {greetUserAction} from '#/state/slices/user';
import {getCountriesAction} from '#/state/slices/country';
import {loginAction} from '#/state/slices/application';

export const Home = () => {
  const history = useHistory();
  const {t} = useTranslation();
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
    try {
      await dispatch(loginAction({email: 'nelson@mosano.eu', password: 'benfica'}));
      history.push('/revisited');
    } catch (error) {
      console.log(error);
    }
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
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
};
