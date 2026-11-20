import environments from "@/config/environment";
import axios from "axios";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

interface CustomSession extends Session {
  AccessToken?: string;
}

const headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: environments.API_URL,
  headers,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  async (request) => {
    const session: CustomSession | null = await getSession();

    if (session && session.AccessToken) {
      request.headers.Authorization = session.AccessToken;
    }
    return request;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => Promise.reject(error),
);

export default instance;
