import InputMask, {Props as InputMaskProps} from 'react-input-mask';

import {useTranslation} from '#/presentation/translation/translation';

import ErrorMessage from './error-message';
import {Container} from './input-styles';

enum InputTypes {
  date = 'date',
  text = 'text',
  password = 'password'
}

type ExtraTypes = {
  type: InputTypes
}
type Props = React.InputHTMLAttributes<HTMLInputElement>;

const BaseInput = (props: Props | InputMaskProps) => (
  <Container>
    <input {...props} />
  </Container>
);

const MaskedInput = (props: Props & {mask: string}) => (
  <InputMask {...props} mask={props.mask}>
    {(inputProps: InputMaskProps) => (
      <BaseInput {...inputProps} />
    )}
  </InputMask>
);

export const Input = ({type = InputTypes.text, ...props}: Props & ExtraTypes) => {
  const {t} = useTranslation();

  const inputs = {
    [InputTypes.date]: () => <MaskedInput {...props} mask={t('dateFormat')} />,
    [InputTypes.text]: () => <BaseInput {...props} />,
    [InputTypes.password]: () => <BaseInput {...props} type="password"/>,
  };

  return (
    <>
      {inputs[type]()}
      <ErrorMessage name={props.name || ''} />
    </>
  );
};
