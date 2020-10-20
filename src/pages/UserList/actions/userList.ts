import { Dispatch } from 'redux';

import { getGithubUsers } from '../api/userList';

import { UserListActionType } from '../constants/actionTypes';

export function fetchGithubUsers() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: UserListActionType.FETCH_USERS
    });
    return getGithubUsers()
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
