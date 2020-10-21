import { RootState } from '../../../store';

const getUserListState = (state: RootState) => state.userList;

export const getUserList = (state: RootState) => getUserListState(state).users;
export const getIsFetchingUsers = (state: RootState) => getUserListState(state).isFetching;
