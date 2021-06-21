import {useHistory} from 'react-router-dom';

import {useTranslation} from '#/presentation/translation/translation';
import {useAppDispatch} from '#/state/hooks';
import {logoutAction} from '#/state/slices/application';

export const Revisited = () => {
  const history = useHistory();
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await dispatch(logoutAction());
    history.replace('/home');
  };

  return (
    <div>
      <h1>{t('logged')}</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
