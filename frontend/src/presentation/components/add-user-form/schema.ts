import * as Yup from 'yup';

export const schema = (t: (text: string) => string ) => {
  return Yup.object({
    name: Yup.string().required(t('requiredField')),
    surname: Yup.string().required(t('requiredField')),
    countryId: Yup.string().required(t('requiredField')),
    birthdate: Yup.string().required(t('requiredField')),
  });
};
