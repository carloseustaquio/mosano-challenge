import {useEffect, useState} from 'react';

import {Text} from '#/text';
import {API_URL} from '#/settings';

import {AxiosHttpClient} from './common/http-client/infrastructure/axios-http-client';

export const App = () => {
  const [users, setUsers] = useState([]);

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
      <Text />
      <pre>
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
  );
};
