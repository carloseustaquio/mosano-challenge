import {Formik, Field, FormikHelpers} from 'formik';
import {useState, useEffect} from 'react';
import {v1 as uuid} from 'uuid';
import {parse} from 'date-fns';

import {Country} from '#/domain/entities/country';
import {Input} from '#/presentation/components/input/input';
import {Button} from '#/presentation/components/button/button';
import {useTranslation} from '#/presentation/translation/translation';
import {useAppDispatch, useAppSelector} from '#/state/hooks';
import {addUserAction} from '#/state/slices/user';
import {User} from '#/domain/entities/user';
import {getCountriesAction} from '#/state/slices/country';
import {Select} from '#/presentation/components/select/select';

import {ButtonWrapper, Form, LoginError} from './add-user-form-styles';
import {schema} from './schema';

type FormState = {
  name: string,
  surname: string,
  countryId: string,
  birthdate: string,
}

const initialFormState: FormState = {
  name: '',
  surname: '',
  countryId: '',
  birthdate: '',
};

type Props = {
  formState?: FormState
}

export const AddUserForm = ({formState = initialFormState}: Props) => {
  const [formError, setFormError] = useState<string | undefined>();
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countryState.countries);

  const handleSubmit = async (values: FormState, formikHelpers: FormikHelpers<FormState>) => {
    formikHelpers.setSubmitting(true);
    const country = countries.find((c) => c.id == values.countryId);
    const parsedDate = parse(values.birthdate, t('dateFnsFormat'), new Date());

    const user = new User(
      uuid(),
      values.name,
      values.surname,
      country as Country,
      parsedDate,
    );
    const actionResult = await dispatch(addUserAction(user));

    if (!addUserAction.fulfilled.match(actionResult)) {
      setFormError(t('addUserError'));
    }

    formikHelpers.setSubmitting(false);
  };

  const loadData = async () => {
    dispatch(getCountriesAction());
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Formik
      initialValues={formState}
      validationSchema={schema(t)}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <h2>{t('addUserInstruction')}</h2>
          <Field name="name" placeholder={t('name')} as={Input} />
          <Field name="surname" placeholder={t('surname')} as={Input} />
          <Field as={Select} name="countryId" placeholder={t('selectCountry')}>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>{country.name}</option>
            ))}
          </Field>
          <Field name="birthdate" placeholder={(t('birthdate'))} as={Input} type="date" mask={t('dateFormat')} />
          <ButtonWrapper>
            <Button outlined>{t('save')}</Button>
          </ButtonWrapper>
          {formError ? <LoginError>{formError}</LoginError> : null}
        </Form>
      )}
    </Formik>
  );
};
