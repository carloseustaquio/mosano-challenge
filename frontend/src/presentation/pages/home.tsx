import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {Text} from '#/presentation/components/text';
import {useTranslation, setLanguage} from '#/presentation/translation/translation';
import {SupportedLanguages} from '#/presentation/translation/types';
import {User} from '#/domain/entities/user';
import {Country} from '#/domain/entities/country';

type Props = {
  users: User[],
  greetedUser: User | undefined,
  countries: Country[],
  handleLogin: () => Promise<void>,
  handleGreetUser: (user: User) => void,
  loadData: () => void
}

export const Home = ({
  users,
  greetedUser,
  countries,
  handleGreetUser,
  handleLogin: stateHandleLogin,
  loadData,
}: Props) => {
  const history = useHistory();
  const {t} = useTranslation();

  const handleLogin = async () => {
    try {
      await stateHandleLogin();
      history.push('/revisited');
    } catch (error) {
      console.log(error);
    }
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
