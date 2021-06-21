import {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '#/state/hooks';
import {greetUserAction, getUsersAction} from '#/state/slices/user';
import {Text} from '#/presentation/text';
import {useTranslation, setLanguage} from '#/presentation/translation/translation';
import {SupportedLanguages} from '#/presentation/translation/types';
import {User} from '#/domain/entities/user';

export const App = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const {users, greetedUser} = useAppSelector(({userState}) => ({
    users: userState.users,
    greetedUser: userState.greetedUser,
  }));

  const loadData = async () => {
    dispatch(getUsersAction());
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
      <strong>
        {greetedUser?.name}
        {greetedUser?.surname}
        {greetedUser?.birthdate}
      </strong>
    </div>
  );
};
