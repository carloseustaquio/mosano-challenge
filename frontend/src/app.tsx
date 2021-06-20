import axios from 'axios';
import {useEffect} from 'react';

import {Text} from '#/text';
import {API_URL} from '#/settings';

export const App = () => {
  const getUsers = async () => {
    const response = await axios.get(API_URL + '/user');
    console.log(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div><Text /></div>
  );
};
