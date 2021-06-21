import {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '#/state/hooks';
import {greetUserAction, getUsersAction} from '#/state/slices/user';
import {Text} from '#/presentation/text';
import {useTranslation, setLanguage} from '#/presentation/translation/translation';
import {SupportedLanguages} from '#/presentation/translation/types';
import {User} from '#/domain/entities/user';
import {getCountriesAction} from '#/state/slices/country';

export const App = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const {users, greetedUser, countries} = useAppSelector(({userState, countryState}) => ({
    users: userState.users,
    greetedUser: userState.greetedUser,
    countries: countryState.countries,
  }));

  const loadData = async () => {
    dispatch(getUsersAction());
    dispatch(getCountriesAction());
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
    </div>
  );
};
