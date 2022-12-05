import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.tvmaze.com/",
    // baseURL: process.env.BASE_API_URL || "http://localhost:443/",
    headers: {
      'Content-Type': 'application/json'
  
    },
  });

  instance.interceptors.response.use(
    function (response) {
      console.log(response);
      // Any status code within the range of 2xx cause this function to trigger
      return response;
    },
    function (error) {
      console.log(error);
      // Any status codes outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  
  export default instance;