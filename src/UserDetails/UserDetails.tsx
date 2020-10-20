import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Button } from 'antd';

import { updateUserDetailsName } from './actions/userDetails';

import { getUserName } from './selectors/userDetails';

export function UserDetails() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const { userId } = useParams();

  const updateUserName = useCallback((e) => dispatch(updateUserDetailsName(e.target.value)), [dispatch]);

  return (
    <div>
      <h2>{userId}</h2>
      <h2>{userName}</h2>
      <input onChange={updateUserName} />
      <Button type="primary">Button</Button>
    </div>
  );
}
