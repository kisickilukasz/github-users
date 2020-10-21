import { ThunkAction } from 'redux-thunk';
import { Action, AnyAction } from 'redux';
import { User } from '../../../interfaces';
import { FetchUsersSuccess, FetchUsersFailure } from './userList.interface';

import { getGitHubUsers } from '../api/userList';

import { UserListActionType } from '../constants/actionTypes';

import { Params } from '../../../interfaces';

export function fetchUsers(params: Params): ThunkAction<Promise<Action>, never, undefined, AnyAction> {
  return (dispatch) => {
    dispatch({
      type: UserListActionType.FETCH_USERS
    });
    return getGitHubUsers(params)
      .then((response) => dispatch(fetchUsersSuccess(response.data)))
      .catch((error) => dispatch(fetchUsersFailure(error.resonse.data)));
  };
}

export function fetchUsersSuccess(users: User[]): FetchUsersSuccess {
  return {
    type: UserListActionType.FETCH_USERS_SUCCESS,
    users
  };
}

export function fetchUsersFailure(errors: any): FetchUsersFailure {
  return {
    type: UserListActionType.FETCH_USERS_FAILURE,
    errors
  };
}
