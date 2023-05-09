import axios, { AxiosResponse, AxiosError } from 'axios';
import { CodeToExecute } from '../types/Console';
import baseURL from './baseUrl';

const http = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});

class ConsoleApiService {
  getOutput(data: CodeToExecute): Promise<AxiosResponse<string[]>> | undefined {
    try {
      return http.post<string[]>(`/console`, data);
    } catch (e) {
      const error = e as AxiosError;
      console.log(error);
    }
  }
}

export default new ConsoleApiService();
