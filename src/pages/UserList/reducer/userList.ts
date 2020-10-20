import { UserListActionType } from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  users: [],
  errors: []
};

interface UserList {
  isFetching: boolean;
  users: any;
  errors: any;
}

export function userList(state: UserList = initialState, action: any): UserList {
  switch (action.type) {
    case UserListActionType.FETCH_USERS:
      return {
        ...state,
        isFetching: true
      };
    case UserListActionType.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.users
      };
    case UserListActionType.FETCH_USERS_FAILURE:
      return {
        ...state,
        errors: action.errors
      };
  }
  return state;
}
