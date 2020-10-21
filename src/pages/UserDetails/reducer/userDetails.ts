import { UserDetailsActionType } from '../constants/actionTypes';
import { UserDetailsAction } from '../actions/userDetails.interface';
import { DetailedUser } from '../../../interfaces';

const initialState = {
  isFetching: false,
  user: {} as DetailedUser,
  errors: []
};

interface UserDetailsState {
  isFetching: boolean;
  user: DetailedUser;
  errors: any;
}

export function userDetails(state: UserDetailsState = initialState, action: UserDetailsAction): UserDetailsState {
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
