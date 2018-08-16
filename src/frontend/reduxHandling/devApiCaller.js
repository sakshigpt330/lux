import fetch from 'cross-fetch';

const { Promise } = require('es6-promise');

const API_URL = 'https://jsonplaceholder.typicode.com/';
// Make an api call
export default (endpoint, method = 'get', body) => fetch(`${API_URL}${endpoint}`, {
  method,
  body: JSON.stringify(body),
})
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  })
  .then(
    response => response,
    error => error,
  );
