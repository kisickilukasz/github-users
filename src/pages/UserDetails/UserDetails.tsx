import React, { useCallback, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { Header } from '../../components/styled/Header';

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
    <Fragment>
      <Header title={<div>{user?.name}</div>} onBack={history.goBack} />
    </Fragment>
  );
}
