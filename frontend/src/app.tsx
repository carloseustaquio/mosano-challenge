import axios from 'axios';
import {useEffect} from 'react';

import {Text} from '#/text';

export const App = () => {
  const getUsers = async () => {
    const response = await axios.get('http://localhost:8080/api/user');
    console.log(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div><Text /></div>
  );
};
