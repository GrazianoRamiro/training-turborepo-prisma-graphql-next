import axios, { AxiosInstance } from 'axios';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

class FootballService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.API_FOOTBALL_BASE_URL,
      timeout: 5000,
      headers: {
        'x-apisports-key': process.env.API_FOOTBALL_API_KEY,
      },
    });
  }

  get(url: string, params?: axios.AxiosRequestConfig) {
    return this.axiosInstance.get(url, params);
  }
}

export const footballService = new FootballService();
