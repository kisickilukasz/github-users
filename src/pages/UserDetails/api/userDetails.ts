import axios, { AxiosResponse } from 'axios';
import { DetailedUser } from '../../../interfaces';

export async function getGitHubUserDetails(userName: string): Promise<AxiosResponse<DetailedUser>> {
  try {
    return await axios.get(`https://api.github.com/users/${userName}`);
  } catch (error) {
    return error;
  }
}
