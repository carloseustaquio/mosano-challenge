import {useTranslation} from '#/presentation/translation/translation';
import {useAppDispatch, useAppSelector} from '#/state/hooks';
import {removeGreetUserAction} from '#/state/slices/user';

import {Container} from './greeting-styles';

export const Greeting = () => {
  const {t} = useTranslation();
  const {user, show} = useAppSelector(({userState}) => ({
    user: userState.greetedUser,
    show: userState.showGreetUser,
  }));
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(removeGreetUserAction());
  };

  return (
    <Container onClick={handleClose} show={show}>
      <div>
        {t('greeting', {
          name: user?.fullName(),
          country: user?.country.name,
          day: user?.birthdayDay(),
          month: user?.birthdayMonth(),
          age: user?.nextAge(),
        })}
      </div>
    </Container>
  );
};
