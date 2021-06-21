import {useTranslation} from 'react-i18next';
import {useHistory} from 'react-router-dom';

import {closeModalAction, logoutAction, openModalAction} from '#/state/slices/application';
import {useAppDispatch, useAppSelector} from '#/state/hooks';
import {languages, setLanguage} from '#/presentation/translation/translation';
import {LoginForm} from '#/presentation/components/login-form/login-form';

import {imgSrc} from './logo';
import {Container, Logo, LoginLink, Language, LanguagesWrapper, LeftSide} from './navbar-styles';
import {ConfirmationForm} from '../confirmation-form/confirmation-form';

export const Navbar = () => {
  const history = useHistory();
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(({applicationState}) => applicationState.isLogged);

  const handleLogin = async () => {
    dispatch(openModalAction(<LoginForm/>));
  };

  const handleConfirmLogout = () => {
    try {
      dispatch(logoutAction());
      dispatch(closeModalAction());
      history.replace('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    dispatch(openModalAction(
        <ConfirmationForm
          text={t('confirmLogout')}
          onDeny={() => dispatch(closeModalAction())}
          onConfirm={handleConfirmLogout}
        />,
    ));
  };

  return (
    <Container>
      <Logo>
      	<img src={imgSrc} alt="Mosano Logo" />
        <p>{t('challenge')}</p>
      </Logo>
      <LeftSide>
        <LanguagesWrapper>
          {
            languages.map((language) => (
              <Language
                onClick={() => setLanguage(language.name)}
                src={language.icon}
                key={language.name} />),
            )
          }
        </LanguagesWrapper>
        {
				!isLogged ?
      		<LoginLink onClick={handleLogin}>{t('login')}</LoginLink> :
      		<LoginLink onClick={handleLogout}>{t('logout')}</LoginLink>
        }
      </LeftSide>
    </Container>
  );
};
