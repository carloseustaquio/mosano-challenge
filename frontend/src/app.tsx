import {useEffect, useState} from 'react';

import {Text} from '#/text';
import {API_URL} from '#/settings';
import {AxiosHttpClient} from '#/common/http-client/infrastructure/axios-http-client';
import {useTranslation, setLanguage} from '#/translation/translation';

import {SupportedLanguages} from './translation/types';

export const App = () => {
  const [users, setUsers] = useState([]);
  const {t} = useTranslation();

  const getUsers = async () => {
    const httpClient = new AxiosHttpClient(API_URL);
    const response = await httpClient.request({
      method: 'get',
      path: '/user',
    });

    setUsers(response.getRawData());
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
      <pre>
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
  );
};
