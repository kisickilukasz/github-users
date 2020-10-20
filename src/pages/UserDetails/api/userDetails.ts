import axios, { AxiosResponse } from 'axios';

export async function getGitHubUserDetails(userName: string): Promise<AxiosResponse> {
  try {
    return await axios.get(`https://api.github.com/users/${userName}`);
  } catch (error) {
    return error;
  }
}
