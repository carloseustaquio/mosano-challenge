import {useHistory} from 'react-router-dom';

import {useAppDispatch} from '#/state/hooks';
import {closeModalAction, loginAction} from '#/state/slices/application';

export const LoginForm = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    try {
      await dispatch(loginAction({email: 'nelson@mosano.eu', password: 'benfica'}));
      dispatch(closeModalAction());
      history.push('/revisited');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>Login Form</div>
      <button onClick={handleLogin}>LOGIN</button>
    </>
  );
};
