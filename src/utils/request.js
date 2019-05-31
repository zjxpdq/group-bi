import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 10000
})

service.interceptors.request.use(config => {
  return config
}, err => {
  Promise.reject(err)
})

service.interceptors.response.use(res => {
  return res.data
}, error => {
  console.log(error.response.data.message)
  return Promise.reject(error.response.data)
})

export default service
