const getUserListState = (state: any) => state.userList;

export const getUserList = (state: any) => getUserListState(state).users;
export const getIsFetchingUsers = (state: any) => getUserListState(state).isFetching;
