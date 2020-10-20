import { Dispatch } from 'redux';

import { getGitHubUserDetails } from '../api/userDetails';

import { UserDetailsActionType } from '../constants/actionTypes';

export function fetchUserDetails(userName: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: UserDetailsActionType.FETCH_USER_DETAILS
    });
    return getGitHubUserDetails(userName)
      .then((response) => dispatch(fetchUserDetailsSuccess(response.data)))
      .catch((error) => dispatch(fetchUserDetailsFailure(error.resonse.data)));
  };
}

export function fetchUserDetailsSuccess(user: any) {
  return {
    type: UserDetailsActionType.FETCH_USER_DETAILS_SUCCESS,
    user
  };
}

export function fetchUserDetailsFailure(errors: any) {
  return {
    type: UserDetailsActionType.FETCH_USER_DETAILS_FAILURE,
    errors
  };
}
