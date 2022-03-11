import { API_BASE_URL } from '../constants.js';

const parseResponse = async (response) => {
  const { status } = response;

  if (!response.ok) {
    throw new Error('status not 2xx');
  }

  const data = await response.json();
  return {
    status,
    data,
  };
};

const request = async (params) => {
  const { method = 'GET', url, headers = {}, body } = params;

  const config = {
    method,
    headers: new Headers(headers),
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(url, config);

  return parseResponse(response);
};

class HttpClient {
  baseUrl;
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  async get(url, headers) {
    const response = await request({
      url: this.baseUrl + url,
      headers,
      method: 'GET',
    });
    return response.data;
  }
}

const http = new HttpClient(API_BASE_URL);
export default http;
