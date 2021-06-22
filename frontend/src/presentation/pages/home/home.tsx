import {useTranslation} from '#/presentation/translation/translation';
import {Screen} from '#/presentation/components/screen/screen';
import {Card} from '#/presentation/components/card/card';
import {AddUserForm} from '#/presentation/components/add-user-form/add-user-form';

export const Home = () => {
  const {t} = useTranslation();

  return (
    <Screen>
      <Card>
        <AddUserForm />
        <div>{t('date', {date: new Date()})}</div>
      </Card>
    </Screen>
  );
};
