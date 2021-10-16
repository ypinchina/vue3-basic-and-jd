import axios from 'axios'
const instant = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  headers: {
    'Content-Type': 'application/json'
  }
})
export function get (url) {
  return new Promise((resolve, reject) => {
    instant.get(url).then(res => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}
export function post (url, data) {
  return new Promise((resolve, reject) => {
    instant.post(url, data).then(res => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}
