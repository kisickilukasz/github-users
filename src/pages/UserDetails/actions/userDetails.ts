import { UserDetailsActionType } from '../constants/actionTypes';

export function updateUserDetailsName(name: string) {
  return {
    type: UserDetailsActionType.CHANGE_USER_NAME,
    name
  };
}
