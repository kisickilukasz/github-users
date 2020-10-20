const getUserDetailsState = (state: any) => state.userDetails;

export const getUser = (state: any) => getUserDetailsState(state).user;
