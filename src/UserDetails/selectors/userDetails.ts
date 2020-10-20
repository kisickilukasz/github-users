const getUserDetailsState = (state: any) => state.userDetails;

export const getUserName = (state: any) => getUserDetailsState(state).userName;
