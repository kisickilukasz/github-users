import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { List } from 'antd';
import { UserAvatar } from '../../components/UserAvatar';

import { fetchGithubUsers } from './actions/userList';

import { getUserList } from './selectors/userList';

export function UserList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userList = useSelector(getUserList);

  useEffect(() => {
    dispatch(fetchGithubUsers());
  }, [dispatch]);

  const onClick = (userLogin: string) => {
    console.log('user login: ', userLogin);
    history.push(`/${userLogin}`);
  };

  return (
    <List
      header={<div>Header</div>}
      itemLayout="horizontal"
      dataSource={userList}
      renderItem={(item: any) => (
        <List.Item>
          <List.Item.Meta
            avatar={<UserAvatar avatarUrl={item.avatar_url} userLogin={item.login} onClick={onClick} />}
            title={<div>{item.login}</div>}
          />
        </List.Item>
      )}
    />
  );
}
