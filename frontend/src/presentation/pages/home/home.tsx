import {useTranslation} from '#/presentation/translation/translation';
import {Screen} from '#/presentation/components/screen/screen';
import {AddUserForm} from '#/presentation/components/add-user-form/add-user-form';
import {useAppDispatch, useAppSelector} from '#/state/hooks';
import {Table} from '#/presentation/components/table/table';
import {greetUserAction} from '#/state/slices/user';
import {User} from '#/domain/entities/user';
import {Greeting} from '#/presentation/components/greeting/greeting';

import {Card, FormAndTableWrapper, GreetingWrapper} from './home-style';

export const Home = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.userState.users);

  const headers = [t('name'), t('country'), t('birthdate')];
  const data = users.map((user) => ({
    id: user.id,
    data: [
      `${user.name} ${user.surname}`,
      user.country.name,
      t('date', {date: user.birthdate}),
    ],
  }));

  const handleRowClick = (id: string) => {
    const user = users.find((u) => u.id === id) as User;
    dispatch(greetUserAction(user));
  };

  return (
    <Screen>
      <Card>
        <FormAndTableWrapper>
          <div>
            <AddUserForm />
          </div>
          <div>
            <Table onRowClick={handleRowClick} headers={headers} data={data} />
          </div>
        </FormAndTableWrapper>
        <GreetingWrapper>
          <Greeting />
        </GreetingWrapper>
      </Card>
    </Screen>
  );
};
