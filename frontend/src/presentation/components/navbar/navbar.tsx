import {useTranslation} from 'react-i18next';
import {useHistory} from 'react-router-dom';

import {loginAction, logoutAction} from '#/state/slices/application';
import {useAppDispatch, useAppSelector} from '#/state/hooks';
import {languages, setLanguage} from '#/presentation/translation/translation';

import {imgSrc} from './logo';
import {Container, Logo, LoginLink, Language, LanguagesWrapper, LeftSide} from './navbar-styles';

export const Navbar = () => {
  const history = useHistory();
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(({applicationState}) => applicationState.isLogged);

  const handleLogin = async () => {
    try {
      await dispatch(loginAction({email: 'nelson@mosano.eu', password: 'benfica'}));
      history.push('/revisited');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      dispatch(logoutAction());
      history.replace('/home');
    } catch (error) {
      console.log(error);
    }
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
