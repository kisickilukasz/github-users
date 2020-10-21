import { Action } from 'redux';
import { User } from '../../../interfaces';

import { UserListActionType } from '../constants/actionTypes';

export type FetchUsers = Action<UserListActionType.FETCH_USERS>;

export interface FetchUsersSuccess extends Action<UserListActionType.FETCH_USERS_SUCCESS> {
  users: User[];
}

export interface FetchUsersFailure extends Action<UserListActionType.FETCH_USERS_FAILURE> {
  errors: any;
}

export type UserListAction = FetchUsers | FetchUsersSuccess | FetchUsersFailure;
