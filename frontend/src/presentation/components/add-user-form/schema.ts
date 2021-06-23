import {parse, isValid} from 'date-fns';
import * as Yup from 'yup';

export const schema = (t: (text: string) => string ) => {
  return Yup.object({
    name: Yup.string().required(t('requiredField')),
    surname: Yup.string().required(t('requiredField')),
    countryId: Yup.string().required(t('requiredField')),
    birthdate: Yup.string().required(t('requiredField')).test('birthdate', t('invalidDateFormatWarning'), (value) => {
      const parsedDate = parse(value || '', t('dateFnsFormat'), new Date());
      return isValid(parsedDate);
    }),
  });
};
