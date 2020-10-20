import axios, { AxiosResponse } from 'axios';

export async function getGitHubUsers(): Promise<AxiosResponse> {
  try {
    return await axios.get('https://api.github.com/users');
  } catch (error) {
    return error;
  }
}
