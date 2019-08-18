import axios from 'axios';

export default function request(url, method = 'GET', headers = {}) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      headers,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
