import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在这里可以添加 token 等认证信息
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 在这里可以处理错误响应
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权的情况
          break;
        case 403:
          // 处理禁止访问的情况
          break;
        case 404:
          // 处理资源不存在的情况
          break;
        default:
          // 处理其他错误
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default instance; 