import axios, { AxiosResponse } from 'axios';
import { Params, User } from '../../../interfaces';

export async function getGitHubUsers(params: Params): Promise<AxiosResponse<User[]>> {
  try {
    return await axios.get('https://api.github.com/users', {
      params: {
        ...params
      }
    });
  } catch (error) {
    return error;
  }
}
