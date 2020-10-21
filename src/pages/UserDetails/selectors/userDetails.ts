import { RootState } from '../../../store';

const getUserDetailsState = (state: RootState) => state.userDetails;

export const getUserDetails = (state: RootState) => getUserDetailsState(state).user;
export const getIsFetchingUserDetails = (state: RootState) => getUserDetailsState(state).isFetching;
