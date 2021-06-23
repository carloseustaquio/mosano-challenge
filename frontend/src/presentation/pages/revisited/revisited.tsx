import {Screen} from '#/presentation/components/screen/screen';
import {AddUserForm} from '#/presentation/components/add-user-form/add-user-form';
import {Greeting} from '#/presentation/components/greeting/greeting';
import {UsersTable} from '#/presentation/components/users-table/users-table';

import {Card, GreetingWrapper} from './revisited-styles';

export const Revisited = () => {
  return (
    <Screen>
      <Card>
        <AddUserForm />
        <UsersTable/>
        <GreetingWrapper>
          <Greeting />
        </GreetingWrapper>
      </Card>
    </Screen>
  );
};
