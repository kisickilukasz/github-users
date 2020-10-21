import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Layout, List } from 'antd';
import { UserAvatar } from '../../components/UserAvatar';
import { Header } from '../../components/styled';
import { ListItemMeta } from './components/styled/ListItemMeta';

import { fetchUsers } from './actions/userList';

import { getUserList, getIsFetchingUsers } from './selectors/userList';

import { PER_PAGE } from './constants/recordsPerPage';

export function UserList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userList = useSelector(getUserList);
  const isFetchingUsers = useSelector(getIsFetchingUsers);

  useEffect(() => {
    dispatch(fetchUsers({ per_page: PER_PAGE }));
  }, [dispatch]);

  const onAvatarClick = (userLogin: string) => {
    history.push(`/${userLogin}`);
  };

  const onPaginationChange = (page: number, pageSize: number | undefined) => {
    const totalItemsLength = pageSize ? pageSize * page : PER_PAGE;
    if (userList.length === totalItemsLength) {
      /* api for users doesn't take "page" parameter and the only way to control pagination
       * is to use "since" parameter, which takes a timestamp. Sending query param "since" as id of
       * the last user in a list resolves in another batch of users starting from last user id + 1.
       * For example sending param since=10 will resolve with users starting from id=11. The size of
       * a batch is controlled by "per_page" parameter.
       * */
      dispatch(fetchUsers({ per_page: PER_PAGE, since: userList[userList.length - 1].id }));
    }
  };

  return (
    <Layout.Content style={{ padding: '0 300px' }}>
      <List
        header={<Header title="GitHub users" />}
        itemLayout="horizontal"
        dataSource={userList}
        loading={isFetchingUsers}
        pagination={{
          onChange: onPaginationChange,
          showSizeChanger: false
        }}
        renderItem={(item: any) => (
          <List.Item>
            <ListItemMeta
              avatar={<UserAvatar avatarUrl={item.avatar_url} userLogin={item.login} onClick={onAvatarClick} />}
              title={item.login}
            />
          </List.Item>
        )}
      />
    </Layout.Content>
  );
}
