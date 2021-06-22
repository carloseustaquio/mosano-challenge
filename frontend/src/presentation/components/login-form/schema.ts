import * as Yup from 'yup';

export const schema = (t: (text: string) => string ) => {
  return Yup.object({
    email: Yup.string()
      .email(t('invalidEmailWarning'))
      .required(t('requiredField')),
    password: Yup.string().required(t('requiredField')),
  });
};
