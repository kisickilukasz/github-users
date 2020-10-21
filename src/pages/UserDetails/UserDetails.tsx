import React, { useCallback, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { Layout } from 'antd';
import { Header } from '../../components/styled';

import { fetchUserDetails } from './actions/userDetails';

import { getUser } from './selectors/userDetails';

export function UserDetails() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const { userLogin } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchUserDetails(userLogin));
  }, [dispatch]);

  // const updateUserName = useCallback((e) => dispatch(updateUserDetailsName(e.target.value)), [dispatch]);

  return (
    <Layout.Content style={{ padding: '0 300px' }}>
      <Header title={user?.name} onBack={history.goBack} />
    </Layout.Content>
  );
}
