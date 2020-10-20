import axios, { AxiosResponse } from 'axios';

export async function getGithubUsers(): Promise<AxiosResponse> {
  try {
    const res = await axios.get('https://api.github.com/users');
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
}
