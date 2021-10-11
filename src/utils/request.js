import axios from 'axios'
export function post(url, data) {
  axios.post(url, data, {
    baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
    'content-Type': 'application/json'
  })
}