import {Formik, Field, FormikHelpers} from 'formik';
import {useState, useEffect} from 'react';
import {v1 as uuid} from 'uuid';
import {format, parse} from 'date-fns';

import {Country} from '#/domain/entities/country';
import {Input} from '#/presentation/components/input/input';
import {Button} from '#/presentation/components/button/button';
import {useTranslation} from '#/presentation/translation/translation';
import {useAppDispatch, useAppSelector} from '#/state/hooks';
import {addUserAction, clearUserFormState, editUserAction} from '#/state/slices/user';
import {User} from '#/domain/entities/user';
import {getCountriesAction} from '#/state/slices/country';
import {Select} from '#/presentation/components/select/select';
import {UserFormState} from '#/state/slices/user/types';

import {ButtonWrapper, Form, LoginError} from './add-user-form-styles';
import {schema} from './schema';

export const AddUserForm = () => {
  const [formError, setFormError] = useState<string | undefined>();
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const parseDateToForm = (date: string) => {
    if (date === '') return date;
    else return format(new Date(date), t('dateFnsFormat'));
  };

  const {countries, initialFormState} = useAppSelector(({countryState, userState}) => ({
    countries: countryState.countries,
    initialFormState: {
      ...userState.userFormInitialState,
      birthdate: parseDateToForm(userState.userFormInitialState.birthdate),
    },
  }));

  const parseFormToUser = (values: UserFormState): User => {
    const country = countries.find((c) => c.id == values.countryId);
    const parsedDate = parse(values.birthdate, t('dateFnsFormat'), new Date());
    const id = values.isEditing ? values.id : uuid();
    return new User(
      id,
      values.name,
      values.surname,
      country as Country,
      parsedDate,
    );
  };

  const handleAddNewUser = async (values: UserFormState) => {
    const actionResult = await dispatch(addUserAction(parseFormToUser(values)));

    if (!addUserAction.fulfilled.match(actionResult)) {
      setFormError(t('addUserError'));
      return false;
    }

    return true;
  };

  const handleEditUser = async (values: UserFormState) => {
    const actionResult = await dispatch(editUserAction(parseFormToUser(values)));

    if (!editUserAction.fulfilled.match(actionResult)) {
      setFormError(t('editUserError'));
      return false;
    }
    return true;
  };

  const handleSubmit = async (values: UserFormState, formikHelpers: FormikHelpers<UserFormState>) => {
    formikHelpers.setSubmitting(true);
    let success = false;

    if (values.isEditing) success = await handleEditUser(values);
    else success = await handleAddNewUser(values);

    if (success) {
      dispatch(clearUserFormState());
      formikHelpers.resetForm();
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
      initialValues={initialFormState}
      validationSchema={schema(t)}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({values}) => (
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
            <Button outlined>{values.isEditing ? t('edit') : t('save')}</Button>
          </ButtonWrapper>
          {formError ? <LoginError>{formError}</LoginError> : null}
        </Form>
      )}
    </Formik>
  );
};
