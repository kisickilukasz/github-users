import * as React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { updateUserDetailsName } from './actions/userDetails';

import { getUserName } from './selectors/userDetails';

interface MapStateToProps {
  userName: string;
}

function mapStateToProps(state: any): MapStateToProps {
  return {
    userName: getUserName(state)
  };
}

interface MapDispatchToProps {
  updateUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function mapDispatchToProps(dispatch: any): MapDispatchToProps {
  return {
    updateUserName: (e) => dispatch(updateUserDetailsName(e.target.value))
  };
}

type UserDetailsProps = MapStateToProps & MapDispatchToProps;

function UserDetailsPage({ userName, updateUserName }: UserDetailsProps) {
  const { userId } = useParams();
  return (
    <div>
      <h2>{userId}</h2>
      <h2>{userName}</h2>
      <input onChange={updateUserName} />
    </div>
  );
}

export const UserDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailsPage);
