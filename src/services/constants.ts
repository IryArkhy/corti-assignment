import { getEndpointById } from './helpers';

export const BASE_API_URL = 'https://run.mocky.io/v3/';

const ENDPOINTS = {
  GET: {
    DOCUMENTS: 'af96a2e4-0a92-44e5-9e26-c9fb8c92d483',
    DOCUMENT_BY_ID(id: number): string {
      return getEndpointById(id);
    },
  },
};

export const HEADERS = {
  ContentType: {
    name: 'Content-Type',
    values: {
      json: 'application/json',
    },
  },
};

export default ENDPOINTS;
