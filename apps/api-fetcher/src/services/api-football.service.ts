import axios, { AxiosInstance } from 'axios';

console.log('Initial URL', process.env.API_FOOTBALL_BASE_URL);
console.log('Initial KEY', process.env.API_FOOTBALL_API_KEY);

class FootballService {
  axiosInstance: AxiosInstance;

  constructor() {
    console.log('CONSTRUCTOR URL', process.env.API_FOOTBALL_BASE_URL);
    console.log('CONSTRUCTOR KEY', process.env.API_FOOTBALL_API_KEY);

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
