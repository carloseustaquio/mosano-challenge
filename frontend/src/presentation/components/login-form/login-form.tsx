/* eslint-disable @typescript-eslint/no-unused-vars */
import {useHistory} from 'react-router-dom';
import {Formik, Field, FormikHelpers} from 'formik';
import {useState} from 'react';

import {useAppDispatch} from '#/state/hooks';
import {closeModalAction, loginAction} from '#/state/slices/application';
import {useTranslation} from '#/presentation/translation/translation';
import {Input} from '#/presentation/components/input/input';
import {Button} from '#/presentation/components/button/button';

import {ButtonWrapper, Form, LoginError} from './login-form-styles';
import {schema} from './schema';

type FormState = {
  email: string;
  password: string;
}

const initialFormState = {email: '', password: ''};

export const LoginForm = () => {
  const [loginError, setLoginError] = useState(null);
  const {t} = useTranslation();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleLogin = async (values: FormState, formikHelpers: FormikHelpers<FormState>) => {
    formikHelpers.setSubmitting(true);
    const resultAction = await dispatch(loginAction(values));
    if (loginAction.fulfilled.match(resultAction)) {
      dispatch(closeModalAction());
      history.push('/revisited');
    } else {
      setLoginError(t('loginError'));
    }
    formikHelpers.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialFormState}
      validationSchema={schema(t)}
      onSubmit={handleLogin}
    >
      {({submitForm}) => (
        <Form>
          <h3>{t('loginGreeting')}</h3>
          <Field name="email" placeholder={t('email')} as={Input} />
          <Field name="password" placeholder={t('password')} type="password" as={Input} />
          <ButtonWrapper>
            <Button onClick={submitForm}>{t('login')}</Button>
          </ButtonWrapper>
          {loginError ? <LoginError>{loginError}</LoginError> : null}
        </Form>
      )}
    </Formik>
  );
};
