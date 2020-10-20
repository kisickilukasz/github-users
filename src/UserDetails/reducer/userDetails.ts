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
  return state;
}
