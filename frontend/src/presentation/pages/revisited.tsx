import {useHistory} from 'react-router-dom';

import {useTranslation} from '#/presentation/translation/translation';
import {useAppDispatch} from '#/state/hooks';
import {logoutAction} from '#/state/slices/application';
import {httpClientSingleton} from '#/main/http-client/http-client-singleton';

export const Revisited = () => {
  const history = useHistory();
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

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

  const handleLogout = () => {
    dispatch(logoutAction());
    history.replace('/home');
  };

  return (
    <div>
      <h1>{t('logged')}</h1>
      <button onClick={handleLogout}>logout</button>

      <button onClick={handlePut}>put data</button>
    </div>
  );
};
