import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const useAxiosInstance = () => {
  const { auth, refreshAccessToken, logout } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
      Authorization: `Bearer ${auth?.accessToken}`,
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401 && error.config && !error.config._retry) {
        error.config._retry = true;

        try {
          await refreshAccessToken();
          error.config.headers.Authorization = `Bearer ${auth?.accessToken}`;
          return axios(error.config);
        } catch (err) {
          logout();
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosInstance;
