import { UserListActionType } from '../constants/actionTypes';
import { UserListAction } from '../actions/userList.interface';
import { User } from '../../../interfaces';

const initialState = {
  isFetching: false,
  users: [],
  errors: []
};

interface UserListState {
  isFetching: boolean;
  users: User[];
  errors: any;
}

export function userList(state: UserListState = initialState, action: UserListAction): UserListState {
  switch (action.type) {
    case UserListActionType.FETCH_USERS:
      return {
        ...state,
        isFetching: true
      };
    case UserListActionType.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: [...state.users, ...action.users]
      };
    case UserListActionType.FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.errors
      };
  }
  return state;
}
