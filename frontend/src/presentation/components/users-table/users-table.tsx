import {ReactNodeArray, useEffect} from 'react';

import {useTranslation} from '#/presentation/translation/translation';
import {useAppDispatch, useAppSelector} from '#/state/hooks';
import {Table} from '#/presentation/components/table/table';
import {deleteUserAction, getUsersAction, greetUserAction} from '#/state/slices/user';
import {User} from '#/domain/entities/user';

import {Actions} from './users-table-actions/actions';

export const UsersTable = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const {users, isLogged} = useAppSelector(({userState, applicationState}) => ({
    users: userState.users,
    isLogged: applicationState.isLogged,
  }));

  const handleEditUser = (user: User) => {
    console.log(user);
  };

  const handleDeleteUser = (id: string) => {
    dispatch(deleteUserAction(id));
  };

  const getHeaders = () => {
    const headers = [t('name'), t('country'), t('birthdate')];
    if (isLogged) headers.push(t('actions'));
    return headers;
  };

  const data = users.map((user) => {
    const baseData: Array<{} | ReactNodeArray> = [
      `${user.name} ${user.surname}`,
      user.country.name,
      t('date', {date: user.birthdate}),
    ];

    if (isLogged) {
      baseData.push(
        <Actions
          key={user.id}
          onEdit={() => handleEditUser(user)}
          onDelete={() => handleDeleteUser(user.id)}
        />,
      );
    };

    return {id: user.id, data: baseData};
  });

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
    <Table onRowClick={handleRowClick} headers={getHeaders()} data={data} />
  );
};
