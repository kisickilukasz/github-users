import { UserDetailsActionType } from '../constants/actionTypes';

const initialState = {
  userName: 'some name'
};

interface UserDetails {
  userName: string;
}

export function userDetails(
  state: UserDetails = initialState,
  action: any
): UserDetails {
  switch (action.type) {
    case UserDetailsActionType.CHANGE_USER_NAME:
      return {
        ...state,
        userName: action.name
      };
  }
  return state;
}
