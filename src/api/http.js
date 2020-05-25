import axios from 'axios'
 const $http = axios.create({
  baseURL:'http://localhost:3001/'
})
$http.interceptors.request.use( config =>{
  return config
}, error => {
  
 return Promise.reject(error)
})
$http.interceptors.response.use(res => {
  return res.data
}, err =>{
  
  return Promise.reject(err)
})

export default $http