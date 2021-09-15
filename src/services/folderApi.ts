import axios, { AxiosPromise, Method, ResponseType } from 'axios';
import { BASE_API_URL, HEADERS } from './constants';

type AxiosParams = {
  method: Method;
  url: string;
  params?: { [key: string]: string } | null;
  responseType?: ResponseType;
  data?: { [key: string]: string | number | boolean } | undefined;
  headers?: { [key: string]: string };
};

axios.defaults.baseURL = BASE_API_URL;

const { ContentType } = HEADERS;

function makeRequest<T>({
  method = 'GET',
  url,
  params = {},
  responseType = 'json',
  data = {},
  headers = { [ContentType.name]: ContentType.values.json },
}: AxiosParams): AxiosPromise<T> {
  return axios({
    method,
    url,
    baseURL: `${axios.defaults.baseURL}`,
    params,
    responseType,
    data,
    headers,
  });
}

export default makeRequest;
