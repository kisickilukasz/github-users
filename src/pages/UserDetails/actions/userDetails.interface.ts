import { Action } from 'redux';
import { DetailedUser } from '../../../interfaces';

import { UserDetailsActionType } from '../constants/actionTypes';

export type FetchUserDetails = Action<UserDetailsActionType.FETCH_USER_DETAILS>;

export interface FetchUserDetailsSuccess extends Action<UserDetailsActionType.FETCH_USER_DETAILS_SUCCESS> {
  user: DetailedUser;
}

export interface FetchUserDetailsFailure extends Action<UserDetailsActionType.FETCH_USER_DETAILS_FAILURE> {
  errors: any;
}

export type UserDetailsAction = FetchUserDetails | FetchUserDetailsSuccess | FetchUserDetailsFailure;
