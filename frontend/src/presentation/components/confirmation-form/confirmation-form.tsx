import {useTranslation} from '#/presentation/translation/translation';
import {Button} from '#/presentation/components/button/button';

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
      <div>
        <Button onClick={onConfirm}>{t('yes')}</Button>
        <Button outlined onClick={onDeny} >{t('no')}</Button>
      </div>
    </Container>

  );
};
