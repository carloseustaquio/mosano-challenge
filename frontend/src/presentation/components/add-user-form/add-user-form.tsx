import {Formik, Field, FormikHelpers} from 'formik';
import {useState} from 'react';

import {Country} from '#/domain/entities/country';
import {Input} from '#/presentation/components/input/input';
import {Button} from '#/presentation/components/button/button';
import {useTranslation} from '#/presentation/translation/translation';

import {ButtonWrapper, Form, LoginError} from './add-user-form-styles';

type FormState = {
	name: string,
	surname: string,
	country?: Country,
	birthdate?: Date,
}

const initialFormState: FormState = {
  name: '',
  surname: '',
  country: undefined,
  birthdate: undefined,
};

type Props = {
	formState?: FormState
}

export const AddUserForm = ({formState = initialFormState}: Props) => {
  const {t} = useTranslation();
  const [loginError] = useState(null);

  const handleLogin = async (values: FormState, formikHelpers: FormikHelpers<FormState>) => {
    formikHelpers.setSubmitting(true);
    console.log(values);
    formikHelpers.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={formState}
      // validationSchema={schema}
      onSubmit={handleLogin}
    >
      {({submitForm}) => (
        <Form>
          <h2>{t('addUserInstruction')}</h2>
          <Field name="name" placeholder={t('name')} as={Input} />
          <Field name="surname" placeholder={t('surname')} as={Input} />
          <Field name="country" placeholder={t('country')} as={Input} />
          <Field name="birthdate" placeholder={(t('birthdate'))} type="date" as={Input} />
          <ButtonWrapper>
            <Button outlined onClick={submitForm}>{t('save')}</Button>
          </ButtonWrapper>
          {loginError ? <LoginError>{loginError}</LoginError> : null}
        </Form>
      )}
    </Formik>
  );
};
