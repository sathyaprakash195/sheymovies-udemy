import axios from 'axios';

export const axiosInstance = axios.create({
      headers : {
        'Content-Type': 'application/json',
        authorization : `Bearer ${localStorage.getItem('token')}`
      }
});