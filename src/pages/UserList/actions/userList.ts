import { Dispatch } from 'redux';

import { getGitHubUsers } from '../api/userList';

import { UserListActionType } from '../constants/actionTypes';

export function fetchUsers() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: UserListActionType.FETCH_USERS
    });
    return getGitHubUsers()
      .then((response) => dispatch(fetchUsersSuccess(response.data)))
      .catch((error) => dispatch(fetchUsersFailure(error.resonse.data)));
  };
}

export function fetchUsersSuccess(users: any) {
  return {
    type: UserListActionType.FETCH_USERS_SUCCESS,
    users
  };
}

export function fetchUsersFailure(errors: any) {
  return {
    type: UserListActionType.FETCH_USERS_FAILURE,
    errors
  };
}
