import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    // 'Content-Type': 'application/json', // Assuming your API expects JSON
    'Authorization': 'Bearer'+ localStorage.getItem('token')
  }
});

export default axiosInstance;