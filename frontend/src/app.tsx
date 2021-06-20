import {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '#/redux/store';
import {setUsers, greetUser, getUsersThunk} from '#/redux/reducers/user';
import {API_URL} from '#/settings';
import {Text} from '#/text';
import {AxiosHttpClient} from '#/common/http-client/infrastructure/axios-http-client';
import {useTranslation, setLanguage} from '#/translation/translation';
import {SupportedLanguages} from '#/translation/types';
import {User} from '#/common/entities/user';

export const App = () => {
  const {users, greetedUser} = useAppSelector(({userState}) => ({
    users: userState.users,
    greetedUser: userState.greetedUser,
  }));
  const dispatch = useAppDispatch();
  const {t} = useTranslation();

  const getUsers = async () => {
    const httpClient = new AxiosHttpClient(API_URL);
    const response = await httpClient.request({
      method: 'get',
      path: '/user',
    });

    dispatch(getUsersThunk());
    dispatch(setUsers(response.getArrayData(User)));
  };

  const handleGreetUser = (user: User) => {
    dispatch(greetUser(user));
  };

  useEffect(() => {
    getUsers();
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
