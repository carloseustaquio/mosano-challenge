import {useTranslation} from '#/presentation/translation/translation';

import {Container} from './confirmation-form-styles';

type Props = {
	text: string;
	onConfirm: () => void;
	onDeny: () => void;
}

export const ConfirmationForm = ({text, onConfirm, onDeny}: Props) => {
  const {t} = useTranslation();

  return (
    <Container>
      <h3>{text}</h3>
      <button onClick={onConfirm} >{t('yes')}</button>
      <button onClick={onDeny} >{t('no')}</button>
    </Container>

  );
};
