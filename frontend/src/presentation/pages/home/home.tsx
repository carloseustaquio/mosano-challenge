import {useEffect} from 'react';

import {useTranslation} from '#/presentation/translation/translation';
import {User} from '#/domain/entities/user';
import {useAppSelector, useAppDispatch} from '#/state/hooks';
import {greetUserAction} from '#/state/slices/user';
import {getCountriesAction} from '#/state/slices/country';
import {Screen} from '#/presentation/components/screen/screen';

export const Home = () => {
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

  const handleGreetUser = (user: User) => {
    dispatch(greetUserAction(user));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Screen>
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
    </Screen>
  );
};
