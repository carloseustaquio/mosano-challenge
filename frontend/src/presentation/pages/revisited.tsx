import {httpClientSingleton} from '#/main/http-client/http-client-singleton';
import {Navbar} from '#/presentation/components/navbar/navbar';

import {Modal} from '../components/modal/modal';

export const Revisited = () => {
  const handlePut = async () => {
    const response = await httpClientSingleton.request({
      method: 'post',
      path: '/user',
      data: {
        'name': 'Carlos1',
        'surname': 'Eustáquio',
        'birthdate': '1999-06-22',
        'country': {
          'id': '1',
          'name': 'Brasil',
        },
      },
    });
    console.log(response.getRawData());
  };

  return (
    <div>
      <Navbar />
      <button onClick={handlePut}>put data</button>
      <Modal />
    </div>
  );
};
