const getUserDetailsState = (state: any) => state.userDetails;

export const getUserDetails = (state: any) => getUserDetailsState(state).user;
export const getIsFetchingUserDetails = (state: any) => getUserDetailsState(state).isFetching;
