import { UserDetailsActionType } from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  user: null,
  errors: []
};

interface UserDetails {
  isFetching: boolean;
  user: any;
  errors: any;
}

export function userDetails(state: UserDetails = initialState, action: any): UserDetails {
  switch (action.type) {
    case UserDetailsActionType.FETCH_USER_DETAILS:
      return {
        ...state,
        isFetching: true
      };
    case UserDetailsActionType.FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user
      };
    case UserDetailsActionType.FETCH_USER_DETAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.errors
      };
  }
  return state;
}
