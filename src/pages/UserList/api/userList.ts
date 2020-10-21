import axios, { AxiosResponse } from 'axios';
export interface Params {
  [key: string]: any;
}

export async function getGitHubUsers(params: Params): Promise<AxiosResponse> {
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
