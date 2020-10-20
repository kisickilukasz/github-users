import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { List, Avatar } from 'antd';

import { fetchGithubUsers } from './actions/userList';

import { getUserList } from './selectors/userList';

export function UserList() {
  const dispatch = useDispatch();
  const userList = useSelector(getUserList);
  const onImageClick = (e: any) => console.log('image: ', e);

  useEffect(() => {
    dispatch(fetchGithubUsers());
  }, [dispatch]);

  return (
    <List
      header={<div>Header</div>}
      itemLayout="horizontal"
      dataSource={userList}
      renderItem={(item: any) => (
        <List.Item>
          <List.Item.Meta avatar={<Avatar src={item.avatar_url} />} title={<a href="https://ant.design">{item.login}</a>} />
        </List.Item>
      )}
    />
  );
}
