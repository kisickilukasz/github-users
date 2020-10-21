import { ThunkAction } from 'redux-thunk';
import { Action, AnyAction } from 'redux';
import { DetailedUser } from '../../../interfaces';
import { FetchUserDetailsSuccess, FetchUserDetailsFailure } from './userDetails.interface';

import { getGitHubUserDetails } from '../api/userDetails';

import { UserDetailsActionType } from '../constants/actionTypes';

export function fetchUserDetails(userName: string): ThunkAction<Promise<Action>, never, undefined, AnyAction> {
  return (dispatch) => {
    dispatch({
      type: UserDetailsActionType.FETCH_USER_DETAILS
    });
    return getGitHubUserDetails(userName)
      .then((response) => dispatch(fetchUserDetailsSuccess(response.data)))
      .catch((error) => dispatch(fetchUserDetailsFailure(error.resonse.data)));
  };
}

export function fetchUserDetailsSuccess(user: DetailedUser): FetchUserDetailsSuccess {
  return {
    type: UserDetailsActionType.FETCH_USER_DETAILS_SUCCESS,
    user
  };
}

export function fetchUserDetailsFailure(errors: any): FetchUserDetailsFailure {
  return {
    type: UserDetailsActionType.FETCH_USER_DETAILS_FAILURE,
    errors
  };
}
