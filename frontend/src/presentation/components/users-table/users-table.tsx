import {useEffect} from 'react';

import {useTranslation} from '#/presentation/translation/translation';
import {useAppDispatch, useAppSelector} from '#/state/hooks';
import {Table} from '#/presentation/components/table/table';
import {getUsersAction, greetUserAction} from '#/state/slices/user';
import {User} from '#/domain/entities/user';

export const UsersTable = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const {users, isLogged} = useAppSelector(({userState, applicationState}) => ({
    users: userState.users,
    isLogged: applicationState.isLogged,
  }));
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

  const loadData = () => {
    dispatch(getUsersAction());
  };

  useEffect(() => {
    isLogged && loadData();
  }, []);

  return (
    <Table onRowClick={handleRowClick} headers={headers} data={data} />
  );
};
