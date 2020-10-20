const initialState = {
  isFetching: false
};

interface UserList {
  isFetching: boolean;
}

export function userList(
  state: UserList = initialState,
  action: any
): UserList {
  return state;
}
