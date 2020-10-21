import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { Layout, Card, Descriptions } from 'antd';
import { Header } from '../../components/styled';
import { Loader, UserDetailsAvatar } from './components/styled';

import { fetchUserDetails } from './actions/userDetails';

import { getUserDetails, getIsFetchingUserDetails } from './selectors/userDetails';

export function UserDetails() {
  const dispatch = useDispatch();
  const user = useSelector(getUserDetails);
  const isFetchingUserDetails = useSelector(getIsFetchingUserDetails);
  const { userLogin } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!isFetchingUserDetails) {
      dispatch(fetchUserDetails(userLogin));
    }
  }, [dispatch]);

  return (
    <Layout.Content style={{ padding: '0 300px' }}>
      {isFetchingUserDetails ? (
        <Loader />
      ) : (
        <Fragment>
          <Header title={user?.name} onBack={history.goBack} />
          <UserDetailsAvatar src={user?.avatar_url} size={120} />
          <Card>
            <Card.Meta
              description={
                <Descriptions size="small" column={1} bordered>
                  <Descriptions.Item label="Name">{user?.name}</Descriptions.Item>
                  <Descriptions.Item label="Login">{user?.login}</Descriptions.Item>
                  <Descriptions.Item label="Followers">{user?.followers}</Descriptions.Item>
                  <Descriptions.Item label="Location">{user?.location}</Descriptions.Item>
                  <Descriptions.Item label="Hireable">{user?.hireable ? user?.hireable : 'maybe'}</Descriptions.Item>
                </Descriptions>
              }
            />
          </Card>
        </Fragment>
      )}
    </Layout.Content>
  );
}
