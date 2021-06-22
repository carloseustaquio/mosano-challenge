import {useTranslation} from '#/presentation/translation/translation';
import {Screen} from '#/presentation/components/screen/screen';
import {Card} from '#/presentation/components/card/card';
import {AddUserForm} from '#/presentation/components/add-user-form/add-user-form';
import {useAppSelector} from '#/state/hooks';

export const Home = () => {
  const {t} = useTranslation();
  const users = useAppSelector((state) => state.userState.users);

  return (
    <Screen>
      <Card>
        <AddUserForm />
        <div>{t('date', {date: new Date()})}</div>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </Card>
    </Screen>
  );
};
